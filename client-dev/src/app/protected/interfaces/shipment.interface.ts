export interface Shipment {
  id: number;
  shipmentRef: string;
  product: string;
  billLanding: string;
  transportType: string;
  currentStatus: ShipmentStatus;
  status: ShipmentStatus[];
  origin: string;
  destiny: string;
  sealNumber: string;
  estimatedTimeArrival: Date;
  estimatedTimeDeparture: Date;
  cutOffDate: Date;
  weight: string;
  grossWeight: string;
  quantity: number;
  clientDocuments?: ShipmentDocument[];
  LoopDocuments?: ShipmentDocument[];
  quoteInvoice?: ShipmentDocument[];
  isotankStatus: string;
}

export interface ShipmentStatus {
  status: ShipmentStatusEnum;
  date: Date | null;
}

export interface ShipmentDocument {
  name: string;
  url: string;
  date: Date;
}

export enum ShipmentStatusEnum {
  PICK_UP,
  SET_SAIL,
  ARRIVED,
  DELIVERED,
  NOT_ASSIGNED
}
