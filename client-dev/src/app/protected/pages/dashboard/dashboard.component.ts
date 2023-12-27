import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { NavigationService } from '../../../shared/services/navigation.service';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Subscription } from 'rxjs';

interface DashboardInfo {
  percentageProfile: number;
  quotations: number;
  shipments: number;
  shipmentsInProgress: number;
  invoices: number;
  notifications: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DashboardComponent implements OnInit, OnDestroy {

  dashboardInfo!: DashboardInfo;

  subscription!: Subscription;
  userSubscription!: Subscription;
  loggedUser: User | null = null;

  constructor(
    navigation: NavigationService,
    private dashboardService: DashboardService,
    private auth: AuthService
  ) {
    navigation.navigateToTop(250);

    this.userSubscription = this.auth.loggedUser.subscribe((user: any) => {
      this.loggedUser = user;
    });
  }

  ngOnInit(): void {
    this.subscription = this.dashboardService.getDashboardInfo().subscribe((response: DashboardInfo) => this.dashboardInfo = response);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
