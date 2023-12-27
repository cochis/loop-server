import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { Invoice } from '../../interfaces/invoice.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class InvoicesComponent implements OnInit, OnDestroy {
  invoices: Invoice[] = [];
  subscription!: Subscription;

  constructor(
    private dashboardService: DashboardService,
    navigation: NavigationService
  ) {
    navigation.navigateToTop(250);
  }

  ngOnInit(): void {
    this.subscription = this.dashboardService
      .getInvoices()
      .subscribe((response: Invoice[]) => (this.invoices = response));
  }

  ngOnDestroy(): void {
      if(this.subscription) {
        this.subscription.unsubscribe();
      }
  }
}
