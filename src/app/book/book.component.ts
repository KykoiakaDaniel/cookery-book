import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { RecipeDataService } from "../services/recipe-data.service";
import { RecipeFiltersComponent } from "../recipe-filters/recipe-filters.component";
import { Recipe } from '../classes/recipe';

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild(RecipeFiltersComponent, { static: false })
  private filterTree: RecipeFiltersComponent;
  markedCategories = null;

  blockTree: boolean = false;
  blockIngredients: boolean = false;
  recipesForm: FormGroup;
  listIngredients: string[];
  listRecipes: Recipe[];
  listFilteredRecipes: Recipe[];

  constructor(private recipeDataService: RecipeDataService) {}

  ngOnInit() {
    this.recipesForm = new FormGroup({
      title: new FormControl(""),
      author: new FormControl(""),
      complexity: new FormControl(100),
      ingredients: new FormArray([new FormControl("")]),
      modeSelect: new FormControl("И")
    });

    this.listIngredients = this.recipeDataService.getListIngredients();
    this.listRecipes = this.recipeDataService.getDataRecipes();
  }

  ngAfterViewInit() {
    this.markedCategories = this.filterTree.checklistSelection;
  }
  ngAfterViewChecked() {
    setTimeout(() => {
      this.listFilteredRecipes = this.listRecipes.filter(recipe =>
        this.checkRecipe(recipe)
      );
    }, 0);
  }

  addIngredientSelection(): void {
    const lastIngredientIndex = <FormArray>(
      this.recipesForm.controls["ingredients"]
    );
    if (
      lastIngredientIndex.controls[lastIngredientIndex.length - 1].value !== ""
    ) {
      lastIngredientIndex.push(new FormControl(""));
    }
  }

  checkRecipe(recipe): boolean {
    return this.checkCategory(recipe);
  }

  checkCategory(recipe): boolean {
    if (this.markedCategories !== null) {
      for (let i = 0; i < this.markedCategories.selected.length; i++) {
        if (
          recipe.categories.includes(this.markedCategories.selected[i].item)
        ) {
          return this.checkComplexity(recipe);
        }
        if (i === this.markedCategories.selected.length - 1) {
          return false;
        }
      }
    }
    return this.checkComplexity(recipe);
  }

  checkComplexity(recipe): boolean {
    if (recipe.complexity <= this.recipesForm.controls["complexity"].value) {
      return this.checkTitle(recipe);
    }
    return false;
  }

  checkTitle(recipe): boolean {
    if (
      recipe.title
        .toLowerCase()
        .includes(this.recipesForm.controls["title"].value.toLowerCase())
    ) {
      return this.checkAuthor(recipe);
    }
    return false;
  }

  checkAuthor(recipe): boolean {
    if (
      recipe.author
        .toLowerCase()
        .includes(this.recipesForm.controls["author"].value.toLowerCase())
    ) {
      return this.checkIngredients(recipe);
    }
    return false;
  }

  checkIngredients(recipe): boolean {
    const selectedIngredients = <FormArray>(
      this.recipesForm.controls["ingredients"]
    );
    const modeAnd: boolean =
      this.recipesForm.controls["modeSelect"].value === "И";
    let allEmpty: boolean = true;
    for (let i = 0; i < selectedIngredients.length; i++) {
      if (selectedIngredients.controls[i].value !== "") {
        allEmpty = false;
        if (modeAnd) {
          if (
            !recipe.ingredients.includes(selectedIngredients.controls[i].value)
          ) {
            return false;
          }
        } else {
          if (
            recipe.ingredients.includes(selectedIngredients.controls[i].value)
          ) {
            return true;
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
}
