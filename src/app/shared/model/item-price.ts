
export class ItemPrice {
 private _label: string;
 private _price: number;
 private _numberOfOrders : number;
 private _categoryId: number;



    /**
     * Getter categoryId
     * @return {number}
     */
	public get categoryId(): number {
		return this._categoryId;
	}

    /**
     * Setter categoryId
     * @param {number} value
     */
	public set categoryId(value: number) {
		this._categoryId = value;
	}

    /**
     * Getter label
     * @return {string}
     */
	public get label(): string {
		return this._label;
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
	public get numberOfOrders(): number {
		return this._numberOfOrders;
	}

    /**
     * Setter label
     * @param {string} value
     */
	public set label(value: string) {
		this._label = value;
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
	public set numberOfOrders(value: number) {
		this._numberOfOrders = value;
	}


}
