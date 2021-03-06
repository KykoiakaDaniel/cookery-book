import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../classes/recipe";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.scss"]
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;

  listCategories: string;
  openRecipe: boolean = false;
  link: string;

  constructor() {}

  ngOnInit() {
    this.link = `/recipe/` + this.recipe.id;
    this.listCategories = this.recipe.categories.join(" , ");
  }
}
