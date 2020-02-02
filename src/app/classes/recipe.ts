export class Recipe {
  constructor(
    public id: number,
    public image: string,
    public title: string,
    public categories: string[],
    public complexity: number,
    public price: number,
    public cookingTime: string,
    public ingredients: {
      ingredient: string;
      count: string;
      alternatives: { ingredient: string; count: string }[];
    }[],
    public cookingSteps: {
      image: string;
      description: string;
    }[],
    public author: string,
    public email: string,
    public date: string,
    public countCooked: number
  ) {}
}
