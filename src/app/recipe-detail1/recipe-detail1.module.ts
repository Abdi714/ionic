import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeDetail1PageRoutingModule } from './recipe-detail1-routing.module';

import { RecipeDetail1Page } from './recipe-detail1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeDetail1PageRoutingModule
  ],
  declarations: [RecipeDetail1Page]
})
export class RecipeDetail1PageModule {}
