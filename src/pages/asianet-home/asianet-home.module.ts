import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsianetHomePage } from './asianet-home';

@NgModule({
  declarations: [
    AsianetHomePage,
  ],
  imports: [
    IonicPageModule.forChild(AsianetHomePage),
  ],
})
export class AsianetHomePageModule {}
