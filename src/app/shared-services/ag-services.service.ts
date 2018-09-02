import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { IAgService } from '../shared-interfaces/ag-service';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class AgServicesService {

constructor(private http: HttpClient) { }
private _url = "../../assets/mock-jsons/main-page.json";

    getAgSerivcesList(): Observable<IAgService[]> {
        return this.http.get<IAgService[]>(this._url);
    }
}
