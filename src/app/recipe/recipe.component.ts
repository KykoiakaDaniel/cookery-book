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

  constructor() {}

  ngOnInit() {
    this.listCategories = this.recipe.categories.join(" , ");
  }
}
