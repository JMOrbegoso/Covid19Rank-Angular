import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Country, CountryHistorical } from './covid19-data.types';

@Injectable({
  providedIn: 'root'
})
export class Covid19DataService {

  constructor(private httpClient: HttpClient) {
    
   }

   getCountries(): Observable<Country[]>{
    return this.httpClient.get<Country[]>("https://disease.sh/v2/countries?yesterday=false");
   }

   getCountry(countryName: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>("https://disease.sh/v2/countries/" + countryName + "?yesterday=true");
   }

   getCountryHistorical(countryName: string): Observable<CountryHistorical>{
    return this.httpClient.get<CountryHistorical>("https://disease.sh/v2/historical/" + countryName + "?lastdays=all");
   }
}
