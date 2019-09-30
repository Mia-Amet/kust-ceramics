import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoursesCatalogComponent } from './components/courses-catalog/courses-catalog.component';
import { HeaderComponent } from './components/header/header.component';
import { HoverListenerDirective } from './directives/hover-listener.directive';
import { TouchListenerDirective } from './directives/touch-listener.directive';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesCatalogComponent,
    HeaderComponent,
    HoverListenerDirective,
    TouchListenerDirective,
    PromoBannerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
