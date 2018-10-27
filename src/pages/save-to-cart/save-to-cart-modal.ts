import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { Supercategory } from "../../app/shared/model/supercategory";
import { ItemPackageDomain } from "../../app/shared/model/item-price";
import { CartService } from "../../app/shared-services/cart.service";

/**
 * Generated class for the SaveToCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-save-to-cart-modal",
  templateUrl: "save-to-cart-modal.html"
})
export class SaveToCartPage {

  public category: Supercategory;
  public service: ItemPackageDomain;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private cartService: CartService ) {
    console.log(navParams.get("selectedCategory"));
    console.log(navParams.get("selectedService"));
  }

  ionViewDidLoad() {
    this.category = this.navParams.get("selectedCategory");
    this.service = this.navParams.get("selectedService");
    this.setCartQuantity();
  }

  private setCartQuantity() {
    this.service.cartQualtity ? this.service.cartQualtity : this.service.cartQualtity = 0;
  }

  onClose() {
    this.viewCtrl.dismiss();
  }


  public increasCartQuantity() {

    this.service.cartQualtity += 1;
    console.log(this.service.cartQualtity);
  }

  decreaseCartQuantity(){
   this.service.cartQualtity >= 1 ? this.service.cartQualtity-= 1 : 0;
  }

  public onConfirm() {
    // on confirm save to storage.
    // create a service to store value
    this.service.cartQualtity >0 ? this.cartService.addToCartList(this.service) : null;
  }

}
