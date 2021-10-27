import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ESGComponent} from './esg/esg.component';
import {ContactComponent} from './contact/contact.component';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'esg', component: ESGComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
