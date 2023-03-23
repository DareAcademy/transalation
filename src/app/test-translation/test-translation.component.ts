import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-test-translation',
  templateUrl: './test-translation.component.html',
  styleUrls: ['./test-translation.component.css']
})
export class TestTranslationComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.get('TestTranslation.heading').subscribe((res: string) => {
      console.log(res);
  });
  }

}
