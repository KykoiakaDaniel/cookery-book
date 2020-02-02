import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { AuthorizationDataService } from "../services/authorization-data.service";

@Component({
  selector: "app-create-recipe-dialog",
  templateUrl: "./create-recipe-dialog.component.html",
  styleUrls: ["./create-recipe-dialog.component.scss"]
})
export class CreateRecipeDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateRecipeDialogComponent>,
    private authorizationDataService: AuthorizationDataService
  ) {}
  ngOnInit() {}
}
