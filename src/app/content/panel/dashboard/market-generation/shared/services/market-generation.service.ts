import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarketGeneration } from '../models/market-generation.model';

@Injectable({
  providedIn: 'root'
})
export class MarketGenerationService {

  constructor(
    private http: HttpClient
  ) { }

  marketGeneration(marketGeneration: MarketGeneration) {
    if (!marketGeneration.id) {
      return this.http.post(environment.shopApiUrl + `api/v1/market`, marketGeneration).pipe(
        map((res) => {
          return res;
        })
      );
    } else {
      return this.http.put(environment.shopApiUrl + `api/v1/market`, marketGeneration).pipe(
        map((res) => {
          return res;
        })
      );
    }


  }

}
