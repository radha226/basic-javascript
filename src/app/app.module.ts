import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ArraySearchComponent } from "./array/array-search/array-search.component";
import { ArrayDeleteComponent } from "./array/array-delete/array-delete.component";
import { ArrayInsertComponent } from "./array/array-insert/array-insert.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArraySearchComponent,
    ArrayDeleteComponent,
    ArrayInsertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
