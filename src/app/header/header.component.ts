import { Component, OnInit } from "@angular/core";
import { AuthorizationComponent } from "../authorization/authorization.component";
import { MatDialog } from "@angular/material";
import { AuthorizationDataService } from "../services/authorization-data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private authorizationDataService: AuthorizationDataService
  ) {}

  ngOnInit() {}

  logOut(): void {
    this.authorizationDataService.changeAuthorizationStatus();
  }

  openAuthorizationDialog() {
    const dialogRef = this.dialog.open(AuthorizationComponent, {
      width: "450px"
    });
  }
}
