import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


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
  selectedPriceIndex = null;
  selectedCategoryIndex = null;
  public division;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController) {
  }

  ngOnInit() {
    const selectedDivision = this.navParams.data;
    console.log("OnInit Category and prices--> ", selectedDivision)

    this.division = selectedDivision;
  }


  openChart(selectedPriceIndex, selectedCatIndex) {
    return this.selectedPriceIndex = selectedPriceIndex, this.selectedCategoryIndex = selectedCatIndex;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryAndPricesPage');
  }

  reduceOrder(selectedPriceIndex, selectedCategoryIndex ) {
    console.log(selectedPriceIndex, selectedCategoryIndex);

    this.division.categories[selectedCategoryIndex].priceList[selectedPriceIndex].numberOfOrders >0 ?
    this.division.categories[selectedCategoryIndex].priceList[selectedPriceIndex].numberOfOrders  -= 1 : 0;
    this.setOrderList();
  }

  increasOrder(selectedPriceIndex, selectedCategoryIndex ) {
    this.division.categories[selectedCategoryIndex].priceList[selectedPriceIndex].numberOfOrders >=0 ?
    this.division.categories[selectedCategoryIndex].priceList[selectedPriceIndex].numberOfOrders  += 1 : 0;
    this.setOrderList();
  }


    private setOrderList( ) {
//  use forEach and set a new array..

      // get the final order list


    }

}
