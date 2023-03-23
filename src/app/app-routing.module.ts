import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestTranslationComponent } from './test-translation/test-translation.component';

const routes: Routes = [
  {path:'',component:TestTranslationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
