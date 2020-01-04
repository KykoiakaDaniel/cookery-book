import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlattener,
  MatTreeFlatDataSource
} from "@angular/material/tree";
import { SelectionModel } from "@angular/cdk/collections";

export class RecipeNode {
  children: RecipeNode[];
  constructor(public item: string, children?: RecipeNode[]) {
    if (children === undefined) {
      this.children = [];
    } else {
      this.children = children;
    }
  }
}

const TREE_DATA = [
  new RecipeNode("Напитки", [new RecipeNode("Квас"), new RecipeNode("Вода")]),
  new RecipeNode("Горячие блюда", [
    new RecipeNode(`Супы`, [
      new RecipeNode(`Борщ`),
      new RecipeNode(`Уха`),
      new RecipeNode(`Том-ям`)
    ]),
    new RecipeNode("Лазанья"),
    new RecipeNode("Форель"),
    new RecipeNode("Макароны с сыром")
  ]),
  new RecipeNode("Хлеб", [new RecipeNode("Бородинский")]),
  new RecipeNode("Выпечка", [new RecipeNode("Пирог с вишней")]),
  new RecipeNode("Закуски", [
    new RecipeNode("Холодные закуски", [
      new RecipeNode("Бутер с рыбой"),
      new RecipeNode("Бутер с колбасой")
    ])
  ])
];

@Component({
  selector: "app-recipe-filters",
  templateUrl: "./recipe-filters.component.html",
  styleUrls: ["./recipe-filters.component.scss"]
})
export class RecipeFiltersComponent implements OnInit {
  ngOnInit() {}

  levels = new Map<RecipeNode, number>();
  treeControl: FlatTreeControl<RecipeNode>;
  treeFlattener: MatTreeFlattener<RecipeNode, RecipeNode>;
  dataSource: MatTreeFlatDataSource<RecipeNode, RecipeNode>;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
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
    this.dataSource.data = TREE_DATA;
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

  checklistSelection = new SelectionModel<RecipeNode>(true);

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

  viv() {
    for (let i = 0; i < this.checklistSelection.selected.length; i++) {
      if (this.checklistSelection.selected[i].children.length === 0) {
        console.log(this.checklistSelection.selected[i].item);
      }
    }
    console.log(this.checklistSelection.selected.length);
  }
}
