import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CoursesCatalogComponent } from './components/courses-catalog/courses-catalog.component';
import { HeaderComponent } from './components/header/header.component';
import { HoverListenerDirective } from './directives/hover-listener.directive';
import { TouchListenerDirective } from './directives/touch-listener.directive';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CourseDescriptionComponent } from './components/course-description/course-description.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FormatFractionsPipe } from './pipes/format-fractions.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderOldComponent } from './components/header-old/header-old.component';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    CoursesCatalogComponent,
    HeaderComponent,
    HoverListenerDirective,
    TouchListenerDirective,
    PromoBannerComponent,
    CarouselComponent,
    TruncatePipe,
    CourseDescriptionComponent,
    FormatFractionsPipe,
    FooterComponent,
    HeaderOldComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
