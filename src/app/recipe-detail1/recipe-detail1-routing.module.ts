import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetail1Page } from './recipe-detail1.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeDetail1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeDetail1PageRoutingModule {}
