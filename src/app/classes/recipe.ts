export class Recipe {
  constructor(
    public image: string,
    public title: string,
    public categories: string[],
    public complexity: number,
    public price: number,
    public cookingTime: string,
    public ingredients: string[],
    public author: string,
    public date: string
  ) {}
}
