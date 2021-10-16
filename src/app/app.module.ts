import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DetailsComponent } from './pages/details/details.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemHeroService} from './services/in-memory-data.service';
import { environment } from 'src/environments/environment';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ModalComponent } from './pages/modal/modal.component';
import {HttpClientService} from "./services/http-client.service";
import { EdituserComponent } from './pages/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    ModalComponent,
    EdituserComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        !environment.production ? HttpClientInMemoryWebApiModule.forRoot(InMemHeroService, {dataEncapsulation: false}) : [],
        ReactiveFormsModule,
        FormsModule,
    ],
  providers:[HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
