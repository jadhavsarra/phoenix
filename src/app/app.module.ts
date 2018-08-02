import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { EventsComponent } from './events/events.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { EvenMoreComponent } from './even-more/even-more.component';

import { PhoenixService } from './_service/phoneixservice';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    EventsComponent,
    HomePageComponent,
    ProductsComponent,
    EvenMoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PhoenixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
