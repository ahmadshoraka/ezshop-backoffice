import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { MarketList } from './shared/models/market-list.model';
import { MarketListService } from './shared/services/market-list.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent implements OnInit {

  marketsList: MarketList[] = [];
  marketFormControl = new FormControl(null);

  panelOpenState: boolean = false;

  constructor(
    private marketListService: MarketListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetMarketsList();

    this.marketFormControl.valueChanges.subscribe((market) => {
      this.router.navigate([`./panel/dashboard/market-generation`], { queryParams: { marketId: market } });
    });

    this.marketListService.updateMarketList.subscribe(res => res ? this.onGetMarketsList() : false)
  }

  onGetMarketsList() {
    this.marketListService.getMarkets().pipe(untilDestroyed(this)).subscribe({
      next: (markets) => {
        this.marketsList = markets;
      }, error: (err) => {

      }, complete() {

      },
    })
  }

  marketGenerte() {
    this.router.navigate([`./panel/dashboard/market-generation`]);
  }
}
