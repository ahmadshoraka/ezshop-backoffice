import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MarketGeneration } from './shared/models/market-generation.model';
import { MarketGenerationService } from './shared/services/market-generation.service';
import { MarketListService } from './../../market-list/shared/services/market-list.service';
import { MarketList } from './../../market-list/shared/models/market-list.model';
import { ToasterService } from 'src/app/shared/services/toaster.service';

@Component({
  selector: 'app-market-generation',
  templateUrl: './market-generation.component.html',
  styleUrls: ['./market-generation.component.scss']
})

export class MarketGenerationComponent implements OnInit {

  marketGenerte!: MarketGeneration;
  market!: MarketList;
  marketGenerteForm!: FormGroup;
  breakpoint!: number;
  marketId!: string;
  spinner: boolean = false;

  wasFormChanged = false;

  constructor(
    private marketGenerationService: MarketGenerationService,
    private marketListService: MarketListService,
    private router: Router,
    private route: ActivatedRoute,
    private toaste: ToasterService,
  ) { }

  ngOnInit(): void {
    this.createMarketGenerteForm();


    this.route.queryParamMap.subscribe((marketId) => {
      if (this.route.snapshot.queryParamMap.get('marketId')) {
        this.marketListService.getMarketById(this.route.snapshot.queryParamMap.get('marketId')!.toString()).subscribe((res) => {
          this.market = res;
          this.createMarketGenerteForm();
        })
      } else {
        this.marketGenerteForm.reset();
        this.market?.id ? this.market = new MarketList() : null;
      }
    });


    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
  }

  createMarketGenerteForm() {
    this.marketGenerteForm = new FormGroup({
      title: new FormControl(this.market?.title),
      path: new FormControl(this.market?.path),
      description: new FormControl(this.market?.description),
    });
  }

  onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  formChanged() {
    this.wasFormChanged = true;
  }

  onMarketGeneration() {
    this.spinner = true;
    const marketGenerte = new MarketGeneration(this.marketGenerteForm.getRawValue());
    this.market?.id ? marketGenerte.id = this.market.id : delete marketGenerte.id;
    this.marketGenerationService.marketGeneration(marketGenerte).subscribe({
      next: (res) => {
        this.toaste.toaster('عملیات باموفقیت انجام شد.', 'success');
        this.spinner = false;
        this.marketListService.isUpdateMarketList(true);
      },
      error: (error) => {
        this.toaste.toaster(error.error?.message ? error.error.message : 'عملیات با خطا روبرو شد، دوباره تلاش کنید.', 'error')
        this.spinner = false;
      },
      complete() { }
    })
  }

  return() {
    this.router.navigate([`./panel/dashboard`])
  }

}
