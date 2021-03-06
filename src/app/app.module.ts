import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ESGComponent } from './esg/esg.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactService} from './contact.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ScrollSpyDirective } from './scroll-spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ESGComponent,
    AboutUsComponent,
    ContactComponent,
    ScrollSpyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
