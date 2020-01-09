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
  MatButtonToggleModule
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
import { RecipeFiltersComponent } from "./recipe-filters/recipe-filters.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { ComplexityRatingComponent } from "./complexity-rating/complexity-rating.component";

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HeaderComponent,
    RecipeFiltersComponent,
    RecipeComponent,
    ComplexityRatingComponent
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
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
