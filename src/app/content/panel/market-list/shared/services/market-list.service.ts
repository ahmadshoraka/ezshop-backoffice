import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MarketList } from '../models/market-list.model';

@Injectable({
  providedIn: 'root'
})
export class MarketListService {

  updateMarketList = new Subject<boolean>();

  constructor(
    private http: HttpClient
  ) { }

  getMarkets() {
    return this.http.get<MarketList[]>(environment.shopApiUrl + `api/v1/market`).pipe(
      map((res: MarketList[]) => {
        return res;
      })
    );
  }  
  
  getMarketById(marketId: string) {
    return this.http.get<MarketList>(environment.shopApiUrl + `api/v1/market/${marketId}`).pipe(
      map((res: MarketList) => {
        return res;
      })
    );
  }  

  isUpdateMarketList(update: boolean){
    this.updateMarketList.next(update);
  }
  
}
