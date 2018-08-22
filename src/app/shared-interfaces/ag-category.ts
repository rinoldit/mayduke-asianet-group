import { IPriceDetails } from "./price-details";

export interface IAgCategory {
    id: number;
    name: string;
    priceDetailList: Array<IPriceDetails>
}
