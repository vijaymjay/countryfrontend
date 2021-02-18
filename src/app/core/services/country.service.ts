import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CountryService {

    constructor (
        private http: HttpClient,
      ) {}

    getCountryList():any{
        return this.http.get(`${environment.countrylist}`);
    }

    storeCountryList(data:any){
        console.log(data);
        return this.http.post(`${environment.apiurl}country/store`,data)
    }


    getCountryList1():any{
        return this.http.get(`${environment.countrylist}`).pipe( map(data =>{
            return this.http.post(`${environment.apiurl}country/store`,data)
        }));
     }

     getCountryListByTable():any{
        return this.http.get(`${environment.apiurl}country/list`);
    } 
}