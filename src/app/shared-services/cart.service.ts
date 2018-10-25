import { Injectable } from "@angular/core";
import { Subcategory } from "../shared/model/subcategory";
import { ItemPackageDomain } from "../shared/model/item-price";

@Injectable()
export class CartService {
  private cartList: Subcategory[];
  constructor() {}

  public addToCart(subcategory: Subcategory, itemPackage: ItemPackageDomain) {


    // const selectedCategory = this.division.supercategory[selectedCategoryIndex];
    // const selectedPrice = this.division.supercategory[selectedCategoryIndex]
    //   .service[selectedPriceIndex];
    // this.division.supercategory[selectedCategoryIndex].service[
    //   selectedPriceIndex
    // ].numberOfOrders >= 0
    //   ? (this.division.supercategory[selectedCategoryIndex].service[
    //       selectedPriceIndex
    //     ].numberOfOrders += 1)
    //   : 0;
    // this.updateCartList(selectedCategory, selectedPrice);


  }

  public removeFromCart() {}

  public getCartList(){}
}
