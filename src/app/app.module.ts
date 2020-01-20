import {
  MatTreeFlatDataSource,
  MatTreeModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatSelectModule,
  MatOptionModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatDialogModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { BookComponent } from "./book/book.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { ComplexityRatingComponent } from "./complexity-rating/complexity-rating.component";
import { FilterCategoriesComponent } from "./filter-categories/filter-categories.component";
import { FiltersComponent } from "./filters/filters.component";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';
import { CookingStepComponent } from './cooking-step/cooking-step.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HeaderComponent,
    RecipeComponent,
    ComplexityRatingComponent,
    FilterCategoriesComponent,
    FiltersComponent,
    RegistrationComponent,
    AuthorizationComponent,
    RecipeDescriptionComponent,
    CookingStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  entryComponents: [AuthorizationComponent, RegistrationComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
