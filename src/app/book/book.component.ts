import { Component, OnInit, ViewChild, AfterViewChecked } from "@angular/core";
import { RecipeDataService } from "../services/recipe-data.service";
import { Recipe } from "../classes/recipe";
import { FiltersComponent } from "../filters/filters.component";
import { Filter } from "../classes/filter";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit, AfterViewChecked {
  @ViewChild(FiltersComponent, { static: false })
  private filtersComponent: FiltersComponent;
  filters: Filter = null;
  listRecipes: Recipe[];
  listFilteredRecipes: Recipe[];

  constructor(private recipeDataService: RecipeDataService) {}

  ngOnInit() {
    this.listRecipes = this.recipeDataService.getDataRecipes();
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      this.filters = this.filtersComponent.recipeFilters;
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
          return false;
        }
      } else {
        if (
          recipe.ingredients.find(
            item => item.ingredient === this.filters.ingredients[i]
          )
        ) {
          return true;
        }
      }
    }
    if (modeAnd) {
      return true;
    } else {
      return allEmpty;
    }
  }
}
