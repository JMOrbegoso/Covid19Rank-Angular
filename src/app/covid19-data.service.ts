import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19DataService {

  constructor(private httpClient: HttpClient) {
    
   }
}
