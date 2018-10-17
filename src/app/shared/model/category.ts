import { ItemPackageDomain } from "./item-price";

export class CategoryDomain {
  private _id: number;
  private _name: string;
  private _itemPriceList: ItemPackageDomain[];
  private _divisionId: number;

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter itemPriceList
   * @return {ItemPackageDomain}
   */
  public get itemPriceList(): ItemPackageDomain[] {
    return this._itemPriceList;
  }

  /**
   * Getter divisionId
   * @return {number}
   */
  public get divisionId(): number {
    return this._divisionId;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter itemPriceList
   * @param {ItemPackageDomain} value
   */
  public set itemPriceList(value: ItemPackageDomain[]) {
    this._itemPriceList = value;
  }

  /**
   * Setter divisionId
   * @param {number} value
   */
  public set divisionId(value: number) {
    this._divisionId = value;
  }

  toJSON(){
    return {
      // obj.
    }
  }
}
