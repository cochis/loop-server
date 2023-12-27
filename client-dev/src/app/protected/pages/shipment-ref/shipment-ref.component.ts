import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { Shipment } from '../../interfaces/shipment.interface';

@Component({
  selector: 'app-shipment-ref',
  templateUrl: './shipment-ref.component.html',
  styleUrls: ['./shipment-ref.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ShipmentRefComponent implements OnInit {

  ref: string;
  shipment?: Shipment;

  constructor(private route: ActivatedRoute, private dashboardService: DashboardService) {
    this.ref = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
      this.dashboardService.getShipment(this.ref).subscribe(s => this.shipment = s);
  }

}
