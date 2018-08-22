import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryAndPricesPage } from './category-and-prices';

@NgModule({
  declarations: [
    CategoryAndPricesPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryAndPricesPage),
  ],
})
export class CategoryAndPricesPageModule {}
