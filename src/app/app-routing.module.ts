import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { RecipeDescriptionComponent } from "./recipe-description/recipe-description.component";
import { MainPageComponent } from "./main-page/main-page.component";

const routes: Routes = [
  { path: "", component: BookComponent },
  { path: "main", component: MainPageComponent },
  { path: "recipe/:id", component: RecipeDescriptionComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
