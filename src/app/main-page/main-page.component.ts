import { Component, OnInit, ViewChild } from "@angular/core";
import { FiltersComponent } from "../filters/filters.component";
import { Filter } from "../classes/filter";
import { Recipe } from "../classes/recipe";
import { RecipeDataService } from "../services/recipe-data.service";
import * as moment from "moment";
import "moment/locale/ru";
import { Author } from "../classes/author";
import { FilterDataService } from "../services/filter-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  filters: Filter = null;
  listRecipes: Recipe[];
  listTopRecipes: Recipe[];
  listNewRecipes: Recipe[];
  listTopAuthors: Author[];

  constructor(
    private recipeDataService: RecipeDataService,
    private filterDataService: FilterDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listRecipes = this.recipeDataService.getDataRecipes();
    this.listTopRecipes = this.listRecipes.slice().sort(this.sortByTopRecipes);
    this.listNewRecipes = this.listRecipes.slice().sort(this.sortByDate);
    this.listTopAuthors = this.recipeDataService
      .getAuthors()
      .slice()
      .sort(this.sortByTopAuthors);
    if (this.listTopRecipes.length > 10) {
      this.listTopRecipes.length = 10;
    }
    if (this.listNewRecipes.length > 10) {
      this.listNewRecipes.length = 10;
    }
    if (this.listTopAuthors.length > 10) {
      this.listTopAuthors.length = 10;
    }
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      this.filters = this.filterDataService.getFilter();
    }, 0);
  }

  sortByTopRecipes(a: Recipe, b: Recipe): number {
    return b.countCooked - a.countCooked;
  }

  sortByDate(a: Recipe, b: Recipe): number {
    if (
      moment(a.date, "DD.MM.YYYY HH:mm:ss").isAfter(
        moment(b.date, "DD.MM.YYYY HH:mm:ss")
      )
    ) {
      return -1;
    }
    if (
      moment(a.date, "DD.MM.YYYY HH:mm:ss").isBefore(
        moment(b.date, "DD.MM.YYYY HH:mm:ss")
      )
    ) {
      return 1;
    }
    if (
      moment(a.date, "DD.MM.YYYY HH:mm:ss").isSame(
        moment(b.date, "DD.MM.YYYY HH:mm:ss")
      )
    ) {
      return 0;
    }
  }

  sortByTopAuthors(a: Author, b: Author): number {
    return b.countCooked - a.countCooked;
  }

  goToAuthorRecipes(author: string): void {
    this.filterDataService.setFilter(
      new Filter([], "", 5, author, [], "И", false)
    );
    this.router.navigate(["/book"]);
  }
}
