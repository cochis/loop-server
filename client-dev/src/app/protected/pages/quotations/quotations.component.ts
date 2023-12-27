import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Quote } from '../../interfaces/quote.interface';
import { NavigationService } from '../../../shared/services/navigation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class QuotationsComponent implements OnInit, OnDestroy {
  quotes: Quote[] = [];
  subscription!: Subscription;

  constructor(
    private dashboardService: DashboardService,
    navigation: NavigationService
  ) {
    navigation.navigateToTop(250);
  }

  ngOnInit(): void {
    this.subscription = this.dashboardService
      .getQuotes()
      .subscribe((response: Quote[]) => (this.quotes = response));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
