import { IAgCategory } from "./ag-category";
import { IAgService } from "./ag-service";


export interface IAgDivision {
    id: number;
    name: string;
    serviceType: IAgService; 
    // catogory: Array<IAgCategory>;
}
