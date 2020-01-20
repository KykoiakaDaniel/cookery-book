import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Recipe } from "../classes/recipe";
import { RecipeDataService } from "../services/recipe-data.service";

@Component({
  selector: "app-recipe-description",
  templateUrl: "./recipe-description.component.html",
  styleUrls: ["./recipe-description.component.scss"]
})
export class RecipeDescriptionComponent implements OnInit {
  recipe: Recipe;
  id: number;
  listCategories: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private recipeDataService: RecipeDataService,
    private router: Router
  ) {
    this.id = parseInt(this.activateRoute.snapshot.params["id"]);
    this.recipe = this.recipeDataService.getRecipeById(this.id);
    if (this.recipe === undefined) {
      this.router.navigate([""]);
    }
  }

  ngOnInit() {
    this.listCategories = this.recipe.categories.join(" , ");
  }
}
