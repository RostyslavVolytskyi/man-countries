import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
// import { Country } from '../../../../models';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  constructor(private http: HttpClient) { }

  getCountryDetails(countryName: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/name/${countryName}`);
  }
}
