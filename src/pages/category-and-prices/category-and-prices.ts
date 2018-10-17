import { Component, OnInit, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ToastController } from "ionic-angular";
import { ItemPackageDomain } from "../../app/shared/model/item-price";
import { CategoryDomain } from "../../app/shared/model/category";
import { Subcategory } from "../../app/shared/model/subcategory";

@IonicPage()
@Component({
  selector: "page-category-and-prices",
  templateUrl: "category-and-prices.html"
})
export class CategoryAndPricesPage implements OnInit {
  selectedPriceIndex = null;
  selectedCategoryIndex = null;
  public division: Subcategory;

  private cartItemList = new Set();
  private getServiceByIdUrl = "http://asianetbangalore.com/android/rest/v1/services/1";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.division  = this.navParams.data;
    console.log("OnInit Category and prices--> ", [this.division  ]);

  }

  /**
   * @description toggle chart box
   * @param selectedPriceIndex
   * @param selectedCatIndex
   */
  toggleChart(selectedPriceIndex, selectedCatIndex) {
    if (
      this.selectedPriceIndex == selectedPriceIndex &&
      this.selectedCategoryIndex == selectedCatIndex
    ) {
      return (this.selectedPriceIndex = this.selectedCategoryIndex = -1);
    } else
      return (
        (this.selectedPriceIndex = selectedPriceIndex),
        (this.selectedCategoryIndex = selectedCatIndex)
      );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CategoryAndPricesPage");
  }

  public reduceOrder(selectedPriceIndex, selectedCategoryIndex) {
    const selectedCategory = this.division.supercategory[selectedCategoryIndex];
    const selectedPrice: ItemPackageDomain = this.division.supercategory[
      selectedCategoryIndex
    ].service[selectedPriceIndex];

    this.division.supercategory[selectedCategoryIndex].service[
      selectedPriceIndex
    ].numberOfOrders > 0
      ? (this.division.supercategory[selectedCategoryIndex].service[
          selectedPriceIndex
        ].numberOfOrders -= 1)
      : 0;

    this.updateCartList(selectedCategory, selectedPrice);
  }

  public increasOrder(selectedPriceIndex, selectedCategoryIndex) {
    const selectedCategory = this.division.supercategory[selectedCategoryIndex];
    const selectedPrice = this.division.supercategory[selectedCategoryIndex]
      .service[selectedPriceIndex];
    this.division.supercategory[selectedCategoryIndex].service[
      selectedPriceIndex
    ].numberOfOrders >= 0
      ? (this.division.supercategory[selectedCategoryIndex].service[
          selectedPriceIndex
        ].numberOfOrders += 1)
      : 0;
    this.updateCartList(selectedCategory, selectedPrice);
  }

  /**
   * @description - Method to update item in the chart list.
   * This cartItemList is affected by three approch,
   * 1. while adding chart item order,
   * 2. while reducing chart item order,
   * 3. while removing the chart item.
   * ************************************************************************
   * @param itemCategory - category of selected item.
   * @param itemPrice - price of selected item.
   */
  private updateCartList(
    itemCategory: any,
    itemPrice: any
  ) {



    //  use forEach and set a new array..
    // get the final order list.

    // check the numberof orders > 0,
    //
    console.log(itemCategory);

    const [...cartItemPriceList] = itemCategory.service;
console.log(cartItemPriceList);

    if(cartItemPriceList) {
      const cartItemList = cartItemPriceList.filter(
        item => item.numberOfOrders > 0
      );
      itemCategory.service = cartItemList;
      console.log(itemCategory);
    }

    // this.cartItemList = [...itemCategory[itemCategory.id - 1](...itemPrice) ];
  }

  private removeItemInChartList() {}

  /**
   * @description - Method to remove item from the chart.
   * @param itemCategory - category of selected item.
   * @param itemPrice - price of selected item.
   */
  public removeChartItem(itemCategory, itemPrice: ItemPackageDomain) {}
}
