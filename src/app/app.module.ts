import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {TranslateService} from "@ngx-translate/core";
import { TestTranslationComponent } from './test-translation/test-translation.component';


@NgModule({
  declarations: [
    AppComponent,
    TestTranslationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
         // ngx-translate and the loader module
         HttpClientModule,
         TranslateModule.forRoot({
             loader: {
                 provide: TranslateLoader,
                 useFactory: HttpLoaderFactory,
                 deps: [HttpClient]
             }
         })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    
    translate.use('en');
  }
 }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}