import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { AuthorizationDataService } from "../services/authorization-data.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Account } from "../classes/account";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  error: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<RegistrationComponent>,
    private authorizationDataService: AuthorizationDataService
  ) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      surname: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      patronymic: new FormControl(""),
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

  onCancelClick(): void {
    this.dialogRef.close();
  }

  registerAccount(): void {
    let status: boolean = this.authorizationDataService.registration(
      new Account(
        this.registrationForm.controls["name"].value,
        this.registrationForm.controls["surname"].value,
        this.registrationForm.controls["patronymic"].value,
        this.registrationForm.controls["email"].value,
        this.registrationForm.controls["password"].value
      )
    );
    if (status) {
      this.dialogRef.close();
    } else {
      this.error = true;
    }
  }
}
