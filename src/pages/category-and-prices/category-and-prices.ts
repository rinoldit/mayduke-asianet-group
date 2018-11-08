import { Component, OnInit, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { ToastController } from "ionic-angular";
import { ItemPackageDomain } from "../../app/shared/model/item-price";
import { CategoryDomain } from "../../app/shared/model/category";
import { Subcategory } from "../../app/shared/model/subcategory";
import { Title } from "@angular/platform-browser";
import { SaveToCartPage } from "../save-to-cart/save-to-cart-modal";
import { CartService } from "../../app/shared-services/cart.service";
import { CartPage } from "../cart/cart";

@IonicPage()
@Component({
  selector: "page-category-and-prices",
  templateUrl: "category-and-prices.html"
})
export class CategoryAndPricesPage implements OnInit {
  selectedPriceIndex = null;
  selectedCategoryIndex = null;
  public division: Subcategory;

  // private cartItemList = new Set();
  // private getServiceByIdUrl =
  //   "http://asianetbangalore.com/android/rest/v1/services/1";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private modalController: ModalController,
    public cartListService : CartService
  ) {}

  ngOnInit() {
    this.division = this.navParams.data;
    console.log("OnInit Category and prices--> ", [this.division]);
  }

  /**
   * @description toggle chart box
   * @param selectedServiceIndex
   * @param selectedCatIndex
   */
  toggleChart(category, selectedServiceIndex) {
    const selectedCategory = category;
    const selectedService: ItemPackageDomain = category.service[selectedServiceIndex];
    const modifyCartItem = this.modalController.create( SaveToCartPage , {'selectedCategory': selectedCategory, 'selectedService': selectedService });
    modifyCartItem.present();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CategoryAndPricesPage");
  }

  /**
   * @description - Method to remove item from the chart.
   * @param itemCategory - category of selected item.
   * @param itemPrice - price of selected item.
   */
  public removeChartItem(itemPrice: ItemPackageDomain) {
    this.cartListService.removeFromCart(itemPrice);
  }

  public isServiceInCartList(service) {
    return this.cartListService.isServiceInCart(service);
  }

  public onClickCartIcon(){
    this.navCtrl.push(CartPage )
  }

  public getCartSize(){
    //
  }

}
