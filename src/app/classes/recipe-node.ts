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
