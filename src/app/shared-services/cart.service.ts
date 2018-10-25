import { Injectable } from "@angular/core";
import { ItemPackageDomain } from "../shared/model/item-price";
import { Supercategory } from "../shared/model/supercategory";
import { Item } from "klaw";

@Injectable()
export class CartService {
  private superCategory = new Supercategory();
  private cartList: Supercategory[] ;
  constructor() {}

  public addToCart(subcategory: Supercategory , itemPackage: ItemPackageDomain) {
    const itemPackageList: ItemPackageDomain[] = [itemPackage];
     const  {super_catedesc ,
        super_cateimg ,
        super_catename } = subcategory;
        this.superCategory = {super_catedesc ,
          super_cateimg ,
          super_catename, service: itemPackageList}

          console.log(this.superCategory);

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

  public removeFromCart() {}

  public getCartList(){}

}
