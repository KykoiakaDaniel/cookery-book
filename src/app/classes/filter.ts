export class Filter {
  constructor(
    public categories: string[],
    public title: string,
    public complexity: number,
    public author: string,
    public ingredients: string[],
    public modeIngredients: string,
    public alternatives: boolean
  ) {}
}
