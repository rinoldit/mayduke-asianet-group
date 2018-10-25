import { Subcategory } from "./subcategory";

export class Task {
  private _categoryId: number;
  private _categoryName: string;
  private _categoryImg: any;
  private _taxrate: number;
  private _categoryDesc: string;
  private _subcategory: Subcategory[];

  /**
   * Getter categoryId
   * @return {number}
   */
  public get categoryId(): number {
    return this._categoryId;
  }

  /**
   * Getter categoryName
   * @return {string}
   */
  public get category_name(): string {
    return this._categoryName;
  }

  /**
   * Getter categoryImg
   * @return {any}
   */
  public get categoryImg(): any {
    return this._categoryImg;
  }

  /**
   * Getter taxrate
   * @return {number}
   */
  public get taxrate(): number {
    return this._taxrate;
  }

  /**
   * Getter categoryDesc
   * @return {string}
   */
  public get categoryDesc(): string {
    return this._categoryDesc;
  }

  /**
   * Getter subcategory
   * @return {Subcategory[]}
   */
  public get subcategory(): Subcategory[] {
    return this._subcategory;
  }

  /**
   * Setter categoryId
   * @param {number} value
   */
  public set categoryId(value: number) {
    this._categoryId = value;
  }

  /**
   * Setter categoryName
   * @param {string} value
   */
  public set category_name(value: string) {
    this._categoryName = value;
  }

  /**
   * Setter categoryImg
   * @param {any} value
   */
  public set categoryImg(value: any) {
    this._categoryImg = value;
  }

  /**
   * Setter taxrate
   * @param {number} value
   */
  public set taxrate(value: number) {
    this._taxrate = value;
  }

  /**
   * Setter categoryDesc
   * @param {string} value
   */
  public set categoryDesc(value: string) {
    this._categoryDesc = value;
  }

  /**
   * Setter subcategory
   * @param {Subcategory[]} value
   */
  public set subcategory(value: Subcategory[]) {
    this._subcategory = value;
  }
}
