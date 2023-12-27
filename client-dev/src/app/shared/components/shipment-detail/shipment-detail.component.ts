import { Component, Input } from '@angular/core';
import { Shipment, ShipmentStatus, ShipmentStatusEnum } from 'src/app/protected/interfaces/shipment.interface';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html',
  styleUrls: ['./shipment-detail.component.scss']
})
export class ShipmentDetailComponent {
  @Input() shipmentDetail!: Shipment;
  @Input() transparent: boolean = false;
  ShipmentStatusEnum = ShipmentStatusEnum;

  get shipmentStatus() {
    const status: ShipmentStatus[] = [];

    for(let i = 0; i < 4; i++) {
      if(this.shipmentDetail.status[i]) {
        status.push(this.shipmentDetail.status[i]);
      } else {
        status.push({
          status: this.getStatusByIndex(i),
          date: null
        });
      }
    }

    return status;
  }

  getStatusByIndex(index: number): ShipmentStatusEnum {
    switch(index) {
      case 0: return ShipmentStatusEnum.PICK_UP;
      case 1: return ShipmentStatusEnum.SET_SAIL;
      case 2: return ShipmentStatusEnum.ARRIVED;
      case 3: return ShipmentStatusEnum.DELIVERED;
      default: return ShipmentStatusEnum.NOT_ASSIGNED
    }
  }
}
