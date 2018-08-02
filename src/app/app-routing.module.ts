import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { EventsComponent } from './events/events.component';
import { EvenMoreComponent } from './even-more/even-more.component';
import { ProductsComponent } from './products/products.component' ;

const AppRouting: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
     path: 'home',
     component: HomePageComponent
  },
  {path: 'about', component: AboutComponent},
  {path: 'events', component: EventsComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'even-more', component: EvenMoreComponent},
  {path: 'products', component: ProductsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRouting)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
