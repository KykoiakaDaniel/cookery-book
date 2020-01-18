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
        ingredients: [
          {
            ingredient: "томат",
            count: "2 шт",
            alternatives: [
              { ingredient: "курица", count: "2 кг" },
              { ingredient: "мясо", count: "300 гр" },
              { ingredient: "лимон", count: "2 шт" },
              { ingredient: "курица", count: "2 кг" },
              { ingredient: "мясо", count: "3 кг" },
              { ingredient: "лимон", count: "2 шт" }
            ]
          },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          {
            ingredient: "мясо",
            count: "300 гр",
            alternatives: [
              { ingredient: "имбирь", count: "7 шт" },
              { ingredient: "сёмга", count: "4 кг" },
              { ingredient: "лимон", count: "1 шт" }
            ]
          },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          {
            ingredient: "дыня",
            count: "2 шт",
            alternatives: [
              { ingredient: "яблоко", count: "8 шт" },
              { ingredient: "банан", count: "4 шт" },
              { ingredient: "лимон", count: "2 шт" }
            ]
          }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          {
            ingredient: "банан",
            count: "6 шт",
            alternatives: [
              { ingredient: "курица", count: "2 кг" },
              { ingredient: "мясо", count: "3 кг" },
              { ingredient: "лимон", count: "2 шт" }
            ]
          }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          {
            ingredient: "мясо",
            count: "2 кг",
            alternatives: [
              { ingredient: "курица", count: "2 кг" },
              { ingredient: "мясо", count: "3 кг" },
              { ingredient: "лимон", count: "2 шт" }
            ]
          },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "огурец", count: "5 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "огурец", count: "5 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "яблоко", count: "4 шт", alternatives: [] },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
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
        ingredients: [
          { ingredient: "томат", count: "2 шт", alternatives: [] },
          { ingredient: "петрушка", count: "2 шт", alternatives: [] },
          { ingredient: "сёмга", count: "2 кг", alternatives: [] },
          { ingredient: "мясо", count: "2 кг", alternatives: [] },
          { ingredient: "курица", count: "2 кг", alternatives: [] },
          { ingredient: "дыня", count: "2 шт", alternatives: [] }
        ],
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
        ingredients: [
          {
            ingredient: "яблоко",
            count: "4 шт",
            alternatives: [
              { ingredient: "курица", count: "2 кг" },
              { ingredient: "мясо", count: "3 кг" },
              { ingredient: "лимон", count: "2 шт" }
            ]
          },
          { ingredient: "банан", count: "6 шт", alternatives: [] }
        ],
        author: "Сергей Кириллов",
        date: "11.12.2019"
      }
    ];
    return this.dataRecipes;
  }
}
