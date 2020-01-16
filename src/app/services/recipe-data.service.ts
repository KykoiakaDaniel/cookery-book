import { RecipeNode } from "./../classes/recipe-node";
import { Injectable } from "@angular/core";
import { Recipe } from "../classes/recipe";

@Injectable({
  providedIn: "root"
})
export class RecipeDataService {
  private dataRecipes: Recipe[];
  private dataCategories: RecipeNode[];
  private listIngredients: string[];

  constructor() {}

  getListIngredients(): string[] {
    this.listIngredients = [
      "томат",
      "огурец",
      "спагетти",
      "говядина",
      "лук",
      "перец",
      "яблоко"
    ];
    return this.listIngredients;
  }

  getDataCategories(): RecipeNode[] {
    this.dataCategories = [
      new RecipeNode("Напитки", [
        new RecipeNode("Квас"),
        new RecipeNode("Вода")
      ]),
      new RecipeNode("Горячие блюда", [
        new RecipeNode("Супы", [
          new RecipeNode("Борщ"),
          new RecipeNode("Уха"),
          new RecipeNode("Том-ям")
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
    return this.dataCategories;
  }

  getDataRecipes(): Recipe[] {
    this.dataRecipes = [
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 1,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 1,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 3,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "огурец"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 2,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 4,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 5,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 4,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 3,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 1,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 2,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 3,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 5,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 4,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 5,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 1,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 1,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 2,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 4,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 2,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 1,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 3,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "огурец"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 4,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 4,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 2,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 4,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 1,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      },
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 2,
        price: 550,
        cookingTime: "1:30",
        ingredients: ["томат", "петрушка", "сёмга", "мясо", "курица", "дыня"],
        author: "Иван Петров",
        date: "20.08.2015"
      },
      {
        image: "https://kipmu.ru/wp-content/uploads/syr.jpg",
        title: "Пирог с вишней",
        categories: ["Выпечка", "Пирог с вишней"],
        complexity: 5,
        price: 3450,
        cookingTime: "9:00",
        ingredients: ["яблоко", "банан"],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      }
    ];
    return this.dataRecipes;
  }
}
