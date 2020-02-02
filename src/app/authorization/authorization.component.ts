import { Component, OnInit } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthorizationDataService } from "../services/authorization-data.service";
import { RegistrationComponent } from "../registration/registration.component";

@Component({
  selector: "app-authorization",
  templateUrl: "./authorization.component.html",
  styleUrls: ["./authorization.component.scss"]
})
export class AuthorizationComponent implements OnInit {
  authorizationForm: FormGroup;
  listSocialMedia: object[];
  error: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<AuthorizationComponent>,
    private dialog: MatDialog,
    private authorizationDataService: AuthorizationDataService
  ) {}

  ngOnInit() {
    this.listSocialMedia = this.authorizationDataService.getSocialMedia();
    this.authorizationForm = new FormGroup({
      email: new FormControl("", [
        Validators.pattern(`[A-Za-z0-9]{3,}@[A-Za-z]{2,}[.]{1}[A-Za-z]{2,}`),
        Validators.required
      ]),
      password: new FormControl("", [
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.required
      ])
    });
  }

  loginToAccount(): void {
    let status: boolean = this.authorizationDataService.login(
      this.authorizationForm.controls["email"].value,
      this.authorizationForm.controls["password"].value
    );
    if (status) {
      this.dialogRef.close();
    } else {
      this.error = true;
    }
  }

  openRegistrationDialog() {
    this.error = false;
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: "450px"
    });

    dialogRef.afterClosed().subscribe(() => {
      if (this.authorizationDataService.getAuthorizationStatus()) {
        this.dialogRef.close();
      }
    });
  }
}
