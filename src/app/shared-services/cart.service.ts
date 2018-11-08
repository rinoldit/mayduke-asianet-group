import { Injectable } from "@angular/core";
import { ItemPackageDomain } from "../shared/model/item-price";
import { Supercategory } from "../shared/model/supercategory";
import { Item } from "klaw";

@Injectable()
export class CartService {
  private cartList: ItemPackageDomain[] = [];
  constructor() {}

  public addToCartList(itemPackage: ItemPackageDomain) {
    // const itemPackageList: ItemPackageDomain[] = [itemPackage];
    // const { super_catedesc, super_cateimg, super_catename } = subcategory;
    // this.superCategory = {
    //   super_catedesc,
    //   super_cateimg,
    //   super_catename,
    //   service: itemPackageList
    // };

    this.cartList.push(itemPackage);
    // update the cart List storage;
    console.log(this.cartList);

    // implement storage ionic storage....

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

  public removeFromCart(service: ItemPackageDomain) {
    const position = this.cartList.findIndex(
      (serviceEle: ItemPackageDomain) => {
        return serviceEle.package_id == service.package_id;
      }
    );
    return this.cartList.splice(position, 1);
    // update cartList storage
  }

  public getCartList(): ItemPackageDomain[] {
    return this.cartList.slice();
  }

  /**
   * @description - Final Cart List to show in the cart page.
   */
  storeInCartList() {
    // sort by supercategory_id of service array.
    // push to cart list if cartQualtity is > 0.
    // use store cart service. to store and retrive data. -> use for cart nav button as well.
  }

  public isServiceInCart(service: ItemPackageDomain): ItemPackageDomain   {
   return this.cartList.find(
      (serviceEle: ItemPackageDomain) => {
     return serviceEle.package_id == service.package_id;
    });
  }
}
