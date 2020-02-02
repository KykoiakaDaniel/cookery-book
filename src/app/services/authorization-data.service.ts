import { Account } from "./../classes/account";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthorizationDataService {
  private authorizedUser: Account = null;
  private socialMedia: object[] = [];
  private listAccounts: Account[] = [];
  constructor() {
    this.getAccounts();
  }

  getAccounts(): void {
    this.listAccounts = [
      {
        name: "Иван",
        surname: "Петров",
        patronymic: "Олегович",
        email: "artur@yandex.ru",
        password: "12345"
      },
      {
        name: "Сергей",
        surname: "Кириллов",
        patronymic: "Олегович",
        email: "sergei@yandex.ru",
        password: "rrr34rr5"
      },
      {
        name: "Марина",
        surname: "Зимина",
        patronymic: "Олегович",
        email: "marina@yandex.ru",
        password: "12345"
      },
      {
        name: "Зина",
        surname: "Иванова",
        patronymic: "Олегович",
        email: "zina@yandex.ru",
        password: "12345"
      },
      {
        name: "Стас",
        surname: "Куропаткин",
        patronymic: "Олегович",
        email: "stas@yandex.ru",
        password: "12345"
      },
      {
        name: "Кирилл",
        surname: "Забродин",
        patronymic: "Олегович",
        email: "kirill@yandex.ru",
        password: "12345"
      },
      {
        name: "Сергей",
        surname: "Архипов",
        patronymic: "Олегович",
        email: "serser@yandex.ru",
        password: "12345"
      },
      {
        name: "Антон",
        surname: "Кривоухов",
        patronymic: "Олегович",
        email: "antonnn@yandex.ru",
        password: "12345"
      }
    ];
  }

  getAuthorizationStatus(): Account {
    return this.authorizedUser;
  }

  getSocialMedia(): object[] {
    this.socialMedia = [
      {
        image: "../assets/images/twitter.png",
        link: "https://twitter.com/login"
      },
      {
        image: "../assets/images/facebook.png",
        link: "https://www.facebook.com/"
      },
      {
        image: "../assets/images/vk.png",
        link: "https://vk.com/"
      },
      {
        image: "../assets/images/instagram.png",
        link: "https://www.instagram.com/"
      },
      {
        image: "../assets/images/googleplus.png",
        link: "https://accounts.google.com/"
      }
    ];
    return this.socialMedia;
  }

  logout(): void {
    this.authorizedUser = null;
  }

  registration(account: Account): boolean {
    let existence = this.listAccounts.find(
      item => item.email === account.email
    );
    if (existence) {
      return false;
    } else {
      this.listAccounts.push(account);
      this.authorizedUser = account;
      return true;
    }
  }

  login(email: string, password: string): boolean {
    let existence = this.listAccounts.find(
      item => item.email === email && item.password === password
    );
    if (existence) {
      this.authorizedUser = existence;
      return true;
    } else {
      return false;
    }
  }
}
