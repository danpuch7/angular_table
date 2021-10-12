import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {DetailsComponent} from "./pages/details/details.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'details', component: DetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
