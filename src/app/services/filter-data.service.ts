import { Filter } from "./../classes/filter";
import { Injectable } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { RecipeNode } from "../classes/recipe-node";
import { SelectionModel } from "@angular/cdk/collections";

@Injectable({
  providedIn: "root"
})
export class FilterDataService {
  private filter: Filter = null;

  constructor() {}

  getFilter(): Filter {
    return this.filter;
  }

  setFilter(newFilter: Filter): void {
    this.filter = newFilter;
  }

  clearFilter(): void {
    this.filter = new Filter([], "", 5, "", [], "И", false);
  }
}
