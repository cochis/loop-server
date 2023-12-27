import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Subscription } from 'rxjs';
import { Shipment } from '../../interfaces/shipment.interface';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ShipmentsComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  shipments!: Shipment[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
      this.subscription = this.dashboardService.getShipments().subscribe((shipments: Shipment[]) => {
        this.shipments = shipments;
      });
  }

  ngOnDestroy(): void {
      if(this.subscription) {
        this.subscription.unsubscribe();
      }
  }
}
