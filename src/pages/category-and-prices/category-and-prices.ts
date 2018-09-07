import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryAndPricesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-and-prices',
  templateUrl: 'category-and-prices.html',
})
export class CategoryAndPricesPage implements OnInit{
  pet: string = "puppies";
  
  public division;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    const selectedDivision = this.navParams.data;
    console.log("OnInit Category and prices--> ", selectedDivision)

    this.division = selectedDivision;
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryAndPricesPage');
  }

}
