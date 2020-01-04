import {
  MatTreeFlatDataSource,
  MatTreeModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { BookComponent } from "./book/book.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeFiltersComponent } from './recipe-filters/recipe-filters.component';

@NgModule({
  declarations: [AppComponent, BookComponent, HeaderComponent, RecipeFiltersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
