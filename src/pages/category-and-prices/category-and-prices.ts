import { Component, OnInit, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ToastController } from "ionic-angular";
import { ItemPrice } from "../../app/shared/model/item-price";

@IonicPage()
@Component({
  selector: "page-category-and-prices",
  templateUrl: "category-and-prices.html"
})
export class CategoryAndPricesPage implements OnInit {
  selectedPriceIndex = null;
  selectedCategoryIndex = null;
  public division;

  private cartItemList = new Set();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {
    const selectedDivision = this.navParams.data;
    console.log("OnInit Category and prices--> ", selectedDivision);

    this.division = selectedDivision;
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
    const selectedCategory = this.division.categories[selectedCategoryIndex];
    const selectedPrice = this.division.categories[selectedCategoryIndex]
      .priceList[selectedPriceIndex];

    this.division.categories[selectedCategoryIndex].priceList[
      selectedPriceIndex
    ].numberOfOrders > 0
      ? (this.division.categories[selectedCategoryIndex].priceList[
          selectedPriceIndex
        ].numberOfOrders -= 1)
      : 0;
    this.updateCartList(selectedCategory, selectedPrice);
  }

  public increasOrder(selectedPriceIndex, selectedCategoryIndex) {
    const selectedCategory = this.division.categories[selectedCategoryIndex];
    const selectedPrice = this.division.categories[selectedCategoryIndex]
      .priceList[selectedPriceIndex];
    this.division.categories[selectedCategoryIndex].priceList[
      selectedPriceIndex
    ].numberOfOrders >= 0
      ? (this.division.categories[selectedCategoryIndex].priceList[
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
  private updateCartList(itemCategory, itemPrice) {
    //  use forEach and set a new array..
    // get the final order list.

    // check the numberof orders > 0,
    //
    // console.log(itemCategory.priceList);
    for (let price of itemCategory.priceList) {
      if (Object.is(price, itemPrice)) {
        console.log(price);
        // this.cartItemList = [...this.cartItemList, price ];

        // TODO destructure the array and array objects.
        console.log(this.cartItemList);
      }
    }
    // this.cartItemList = [...itemCategory[itemCategory.id - 1](...itemPrice) ];
  }

  private removeItemInChartList() {

  }

  /**
   * @description - Method to remove item from the chart.
   * @param itemCategory - category of selected item.
   * @param itemPrice - price of selected item.
   */
  public removeChartItem(itemCategory, itemPrice: ItemPrice) {}
}
