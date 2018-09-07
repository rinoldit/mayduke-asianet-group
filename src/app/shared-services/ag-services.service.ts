import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '../../../node_modules/@angular/common/http';
import { IAgService } from '../shared-interfaces/ag-service';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class AgServicesService {

    constructor(private http: HttpClient, ) { }
    private _url = "../../assets/mock-jsons/main-page.json";

    getAgSerivcesList(): Observable<IAgService[]> {
        return this.http.get<IAgService[]>(this._url);
    }

    getActualJson() {
        // let myHeaders = new HttpHeaders().append('Content-Type', 'application/json');
        // { responseType: 'text' }

        const url = "http://www.asianetbangalore.com/android/getservice.php"
        return this.http.get<any>(url).subscribe(
            data => {
                console.log('Actual Json Data--> ', data);
              },
              (err: HttpErrorResponse) => {
                console.log('Home Actual Request Error--> ', err.error);
                console.log('Home Actual Request Error Name--> ', err.name);
                console.log('Home Actual Request Error Message --> ',err.message);
                console.log('Home Actual Request Error Status--> ', err.status);
              }

        );
    }
}
