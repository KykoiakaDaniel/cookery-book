import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthorizationDataService {
  private isLogged: boolean = false;
  private socialMedia: object[] = [];
  constructor() {}

  getAuthorizationStatus(): boolean {
    return this.isLogged;
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

  changeAuthorizationStatus(): void {
    this.isLogged = !this.isLogged;
  }
}
