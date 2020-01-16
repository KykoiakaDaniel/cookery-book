import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";
import { FilterCategoriesComponent } from "../filter-categories/filter-categories.component";
import { SelectionModel } from "@angular/cdk/collections";
import { RecipeNode } from "../classes/recipe-node";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { RecipeDataService } from "../services/recipe-data.service";
import { Filter } from "../classes/filter";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent
  implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild(FilterCategoriesComponent, { static: false })
  private filterTree: FilterCategoriesComponent;
  markedCategories: SelectionModel<RecipeNode> = null;

  blockTree: boolean = false;
  blockIngredients: boolean = false;
  recipesForm: FormGroup;
  listIngredients: string[];
  recipeFilters: Filter;

  constructor(private recipeDataService: RecipeDataService) {}

  ngOnInit() {
    this.recipesForm = new FormGroup({
      title: new FormControl(""),
      author: new FormControl(""),
      complexity: new FormControl(100),
      ingredients: new FormArray([new FormControl("")]),
      modeSelect: new FormControl("И"),
      alternatives: new FormControl(false)
    });

    this.listIngredients = this.recipeDataService.getListIngredients();
  }
  ngAfterViewInit() {
    this.markedCategories = this.filterTree.checklistSelection;
  }

  ngAfterViewChecked() {
    let categories: string[] = [];
    let ingredients: string[] = [];
    const selectedIngredients = <FormArray>(
      this.recipesForm.controls["ingredients"]
    );
    if (this.markedCategories !== null) {
      for (let i = 0; i < this.markedCategories.selected.length; i++) {
        categories.push(this.markedCategories.selected[i].item);
      }
    }
    for (let i = 0; i < selectedIngredients.length; i++) {
      if (selectedIngredients.controls[i].value !== "") {
        ingredients.push(selectedIngredients.controls[i].value);
      }
    }
    this.recipeFilters = new Filter(
      categories,
      this.recipesForm.controls["title"].value,
      this.recipesForm.controls["complexity"].value,
      this.recipesForm.controls["author"].value,
      ingredients,
      this.recipesForm.controls["modeSelect"].value,
      this.recipesForm.controls["alternatives"].value
    );
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
  removeIngredientSelection(index: number): void {
    const select = <FormArray>this.recipesForm.controls["ingredients"];
    select.removeAt(index);
    if (!select.length) {
      select.push(new FormControl(""));
    }
  }
}
