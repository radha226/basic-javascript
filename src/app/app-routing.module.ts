import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArrayDeleteComponent } from "./array/array-delete/array-delete.component";
import { ArrayInsertComponent } from "./array/array-insert/array-insert.component";
import { ArraySearchComponent } from "./array/array-search/array-search.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "array-insert", component: ArrayInsertComponent },
  { path: "array-delete", component: ArrayDeleteComponent },
  { path: "array-search", component: ArraySearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
