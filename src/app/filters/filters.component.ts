import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterContentChecked
} from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { RecipeNode } from "../classes/recipe-node";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
import { RecipeDataService } from "../services/recipe-data.service";
import { Filter } from "../classes/filter";
import { FilterDataService } from "../services/filter-data.service";
import { Router } from "@angular/router";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material";
import { FlatTreeControl } from "@angular/cdk/tree";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit, AfterContentChecked {
  levels = new Map<RecipeNode, number>();
  treeControl: FlatTreeControl<RecipeNode>;
  treeFlattener: MatTreeFlattener<RecipeNode, RecipeNode>;
  dataSource: MatTreeFlatDataSource<RecipeNode, RecipeNode>;
  checklistSelection: SelectionModel<RecipeNode> = new SelectionModel<
    RecipeNode
  >(true);

  blockTree: boolean = false;
  blockIngredients: boolean = false;
  recipesForm: FormGroup;
  listIngredients: string[];

  constructor(
    private recipeDataService: RecipeDataService,
    private filterDataService: FilterDataService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl<RecipeNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
    this.dataSource.data = this.recipeDataService.getDataCategories();
  }

  ngOnInit() {
    this.recipesForm = new FormGroup({
      title: new FormControl(""),
      author: new FormControl(""),
      complexity: new FormControl(5),
      ingredients: new FormArray([new FormControl("")]),
      modeSelect: new FormControl("И"),
      alternatives: new FormControl(false)
    });

    this.listIngredients = this.recipeDataService.getListIngredients();

    if (this.filterDataService.getFilter() === null) {
      this.changeFilter();
    }
    if (this.router.url === "/book") {
      const tempFilter: Filter = this.filterDataService.getFilter();
      this.recipesForm.controls["title"].setValue(tempFilter.title);
      this.recipesForm.controls["complexity"].setValue(tempFilter.complexity);
      this.recipesForm.controls["author"].setValue(tempFilter.author);
      this.recipesForm.controls["modeSelect"].setValue(
        tempFilter.modeIngredients
      );
      this.recipesForm.controls["alternatives"].setValue(
        tempFilter.alternatives
      );
      const ingredientIndex = <FormArray>(
        this.recipesForm.controls["ingredients"]
      );
      tempFilter.ingredients.forEach(item => {
        this.addIngredientSelection();
        ingredientIndex.controls[ingredientIndex.length - 1].setValue(item);
      });
    }
  }

  ngAfterContentChecked() {
    if (this.recipesForm.dirty || this.checklistSelection.selected.length) {
      this.changeFilter();
      if (this.router.url === "/") {
        this.router.navigate(["/book"]);
      }
    }
  }

  changeFilter(): void {
    let categories: string[] = [];
    let ingredients: string[] = [];
    const selectedIngredients = <FormArray>(
      this.recipesForm.controls["ingredients"]
    );
    for (let i = 0; i < this.checklistSelection.selected.length; i++) {
      categories.push(this.checklistSelection.selected[i].item);
    }
    for (let i = 0; i < selectedIngredients.length; i++) {
      if (selectedIngredients.controls[i].value !== "") {
        ingredients.push(selectedIngredients.controls[i].value);
      }
    }
    this.filterDataService.setFilter(
      new Filter(
        categories,
        this.recipesForm.controls["title"].value,
        this.recipesForm.controls["complexity"].value,
        this.recipesForm.controls["author"].value,
        ingredients,
        this.recipesForm.controls["modeSelect"].value,
        this.recipesForm.controls["alternatives"].value
      )
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
    this.changeFilter();
  }

  getLevel = (node: RecipeNode): number => {
    return this.levels.get(node) || 0;
  };

  isExpandable = (node: RecipeNode): boolean => {
    return node.children.length > 0;
  };

  getChildren = (node: RecipeNode) => {
    return node.children;
  };

  transformer = (node: RecipeNode, level: number) => {
    this.levels.set(node, level);
    return node;
  };

  hasChildren = (index: number, node: RecipeNode) => {
    return this.isExpandable(node);
  };

  descendantsAllSelected(node: RecipeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    if (!descendants.length) {
      return this.checklistSelection.isSelected(node);
    }
    const selected = this.checklistSelection.isSelected(node);
    const allSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (!selected && allSelected) {
      this.checklistSelection.select(node);
      this.changeDetectorRef.markForCheck();
    }
    return allSelected;
  }

  descendantsPartiallySelected(node: RecipeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    if (!descendants.length) {
      return false;
    }
    const result = descendants.some(child =>
      this.checklistSelection.isSelected(child)
    );
    return result && !this.descendantsAllSelected(node);
  }

  todoItemSelectionToggle(node: RecipeNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
    descendants.every(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
    this.changeFilter();
  }

  todoLeafItemSelectionToggle(node: RecipeNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  checkAllParentsSelection(node: RecipeNode): void {
    let parent: RecipeNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  checkRootNodeSelection(node: RecipeNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  getParentNode(node: RecipeNode): RecipeNode | null {
    const currentLevel = this.getLevel(node);
    if (currentLevel < 1) {
      return null;
    }
    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];
      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
}
