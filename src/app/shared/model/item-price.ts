export class ItemPackageDomain {
  public packagename: string;
  private _price: number;
  private _cartQuantity: number;
  private category_id: number;
  private maxv: any;
  private minv: any;
  public package_id: number;

  public status: "1";
  public subcategory_id: "1";
  public supercategory_id: "1";


  /**
   * Getter $category_id
   * @return {number}
   */
  public get $category_id(): number {
    return this.category_id;
  }

  /**
   * Getter $maxv
   * @return {any}
   */
  public get $maxv(): any {
    return this.maxv;
  }

  /**
   * Getter $minv
   * @return {any}
   */
  public get $minv(): any {
    return this.minv;
  }

  /**
   * Getter $package_id
   * @return {number}
   */
  public get $package_id(): number {
    return this.package_id;
  }


  /**
   * Setter $category_id
   * @param {number} value
   */
  public set $category_id(value: number) {
    this.category_id = value;
  }

  /**
   * Setter $maxv
   * @param {any} value
   */
  public set $maxv(value: any) {
    this.maxv = value;
  }

  /**
   * Setter $minv
   * @param {any} value
   */
  public set $minv(value: any) {
    this.minv = value;
  }

  /**
   * Setter $package_id
   * @param {number} value
   */
  public set $package_id(value: number) {
    this.package_id = value;
  }

  /**
   * Getter categoryId
   * @return {number}
   */
  public get categoryId(): number {
    return this.category_id;
  }

  /**
   * Setter categoryId
   * @param {number} value
   */
  public set categoryId(value: number) {
    this.category_id = value;
  }

  /**
   * Getter label
   * @return {string}
   */
  public get label(): string {
    return this.packagename;
  }

  /**
   * Getter price
   * @return {number}
   */
  public get price(): number {
    return this._price;
  }

  /**
   * Getter numberOfOrders
   * @return {number}
   */
  public get cartQualtity(): number {
    return this._cartQuantity;
  }

  /**
   * Setter label
   * @param {string} value
   */
  public set label(value: string) {
    this.packagename = value;
  }

  /**
   * Setter price
   * @param {number} value
   */
  public set price(value: number) {
    this._price = value;
  }

  /**
   * Setter numberOfOrders
   * @param {number} value
   */
  public set cartQualtity(value: number) {
    this._cartQuantity = value;
  }
}
