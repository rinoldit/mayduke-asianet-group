import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartService } from '../../app/shared-services/cart.service';
import { ItemPackageDomain } from '../../app/shared/model/item-price';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  public cartList: ItemPackageDomain[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private cartService: CartService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');

    console.log(this.cartService.getCartList());
    this.cartList = this.cartService.getCartList();
  }

  /**
   * @description - Method to remove item from the chart.
   * @param itemCategory - category of selected item.
   * @param itemPrice - price of selected item.
   */
  public removeChartItem(itemPrice: ItemPackageDomain) {
    this.cartService.removeFromCart(itemPrice);
  }

}
