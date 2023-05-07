import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MarketList } from './../market-list/shared/models/market-list.model';
import { MarketListService } from './../market-list/shared/services/market-list.service';


@UntilDestroy()
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  marketsList: MarketList[] = [];
  marketFormControl = new FormControl(null);
  spinner: boolean = true;

  constructor(
    private marketListService: MarketListService,
    private router: Router
  ) { }


  ngOnInit() {
    this.onGetMarketsList();

    this.marketFormControl.valueChanges.subscribe((market) => {
      this.router.navigate([`./panel/dashboard/market-generation`], { queryParams: { marketId: market } });
    });
    // this.init();
  }

  onGetMarketsList() {
    this.spinner = true;
    this.marketListService.getMarkets().pipe(untilDestroyed(this)).subscribe({
      next: (markets) => {
        this.spinner = false;
        markets?.length ? this.marketsList = markets : this.marketGenerte();
      }, error: (err) => { this.spinner = false; }, complete() { },
    })
  }

  marketGenerte() {
    this.router.navigate([`./panel/dashboard/market-generation`]);
  }

}
