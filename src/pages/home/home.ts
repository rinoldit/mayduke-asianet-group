import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AsianetHomePage } from '../asianet-home/asianet-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public onWaterTankCleaning() {
    this.navCtrl.push(AsianetHomePage);
  }
  
}
