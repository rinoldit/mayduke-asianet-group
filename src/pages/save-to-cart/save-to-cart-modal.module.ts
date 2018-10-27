import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaveToCartPage } from './save-to-cart-modal';

@NgModule({
  declarations: [
    SaveToCartPage,
  ],
  imports: [
    IonicPageModule.forChild(SaveToCartPage),
  ],
})
export class SaveToCartPageModule {}
