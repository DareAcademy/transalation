import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translate-demo';

  constructor(private translate: TranslateService) {
  }


  useLanguage(language: string): void {
    this.translate.use(language);    
}
}
