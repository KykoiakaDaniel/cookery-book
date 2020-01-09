import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RecipeDataService {
  private dataRecipes;

  constructor() {}

  getDataRecipes() {
    this.dataRecipes = [
      {
        image:
          "http://povareshkino.ru/wp-content/uploads/2015/03/kak-opredelit-isporchennoe-myaso3.jpg",
        title: "Борщ",
        categories: ["Борщ", "Супы", "Горячие блюда"],
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 67,
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
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 67,
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
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 18,
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
        complexity: 80,
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
        complexity: 18,
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
