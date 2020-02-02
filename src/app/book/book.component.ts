import { Component, OnInit, ViewChild, AfterViewChecked } from "@angular/core";
import { RecipeDataService } from "../services/recipe-data.service";
import { Recipe } from "../classes/recipe";
import { FiltersComponent } from "../filters/filters.component";
import { Filter } from "../classes/filter";
import { FilterDataService } from "../services/filter-data.service";
import { MatDialog } from "@angular/material";
import { AuthorizationDataService } from "../services/authorization-data.service";
import { CreateRecipeDialogComponent } from "../create-recipe-dialog/create-recipe-dialog.component";
import { AuthorizationComponent } from "../authorization/authorization.component";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit, AfterViewChecked {
  filters: Filter = null;
  listRecipes: Recipe[];
  listFilteredRecipes: Recipe[];

  constructor(
    private recipeDataService: RecipeDataService,
    private filterDataService: FilterDataService,
    private dialog: MatDialog,
    private authorizationDataService: AuthorizationDataService
  ) {}

  ngOnInit() {
    this.listRecipes = this.recipeDataService.getDataRecipes();
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      this.filters = this.filterDataService.getFilter();
      this.listFilteredRecipes = this.listRecipes.filter(recipe =>
        this.checkRecipe(recipe)
      );
    }, 0);
  }

  checkRecipe(recipe: Recipe): boolean {
    return this.checkCategory(recipe);
  }

  checkCategory(recipe: Recipe): boolean {
    for (let i = 0; i < this.filters.categories.length; i++) {
      if (recipe.categories.includes(this.filters.categories[i])) {
        return this.checkComplexity(recipe);
      }
      if (i === this.filters.categories.length - 1) {
        return false;
      }
    }
    return this.checkComplexity(recipe);
  }

  checkComplexity(recipe: Recipe): boolean {
    if (recipe.complexity <= this.filters.complexity) {
      return this.checkTitle(recipe);
    }
    return false;
  }

  checkTitle(recipe: Recipe): boolean {
    if (recipe.title.toLowerCase().includes(this.filters.title.toLowerCase())) {
      return this.checkAuthor(recipe);
    }
    return false;
  }

  checkAuthor(recipe: Recipe): boolean {
    if (
      recipe.author.toLowerCase().includes(this.filters.author.toLowerCase())
    ) {
      return this.checkIngredients(recipe);
    }
    return false;
  }

  checkIngredients(recipe: Recipe): boolean {
    const modeAnd: boolean = this.filters.modeIngredients === "И";
    let allEmpty: boolean = true;
    for (let i = 0; i < this.filters.ingredients.length; i++) {
      allEmpty = false;
      if (modeAnd) {
        if (
          !recipe.ingredients.find(
            item => item.ingredient === this.filters.ingredients[i]
          )
        ) {
          if (this.filters.alternatives) {
            if (!this.checkAlternatives(recipe, this.filters.ingredients[i])) {
              return false;
            }
          } else {
            return false;
          }
        }
      } else {
        if (
          recipe.ingredients.find(
            item => item.ingredient === this.filters.ingredients[i]
          )
        ) {
          return true;
        } else {
          if (this.filters.alternatives) {
            if (this.checkAlternatives(recipe, this.filters.ingredients[i])) {
              return true;
            }
          }
        }
      }
    }
    if (modeAnd) {
      return true;
    } else {
      return allEmpty;
    }
  }

  checkAlternatives(recipe: Recipe, filterIngredient: string): boolean {
    let existence: boolean = false;
    recipe.ingredients.forEach(item => {
      if (
        item.alternatives.find(
          alternativeItem => alternativeItem.ingredient === filterIngredient
        )
      ) {
        existence = true;
      }
    });
    return existence;
  }

  addNewRecipe(): void {
    if (this.authorizationDataService.getAuthorizationStatus()) {
      const dialogRef = this.dialog.open(CreateRecipeDialogComponent, {
        width: "450px"
      });
    } else {
      const dialogRef = this.dialog.open(AuthorizationComponent, {
        width: "450px"
      });
    }
  }
}
