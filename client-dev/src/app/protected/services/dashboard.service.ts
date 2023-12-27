import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Invoice } from '../interfaces/invoice.interface';
import { Quote, QuoteStatus } from '../interfaces/quote.interface';
import { Shipment, ShipmentStatusEnum } from '../interfaces/shipment.interface';

@Injectable()
export class DashboardService {
  constructor() {}

  getDashboardInfo() {
    const data = {
      percentageProfile: 50,
      quotations: 5,
      shipments: 12,
      shipmentsInProgress: 2,
      invoices: 24,
      notifications: 0,
    };

    return of(data);
  }

  getQuotes(): Observable<Quote[]> {
    const quotes: Quote[] = [];

    const availableStatus = [
      QuoteStatus.LOST,
      QuoteStatus.OPEN,
      QuoteStatus.POSTED,
      QuoteStatus.DECLINED,
      QuoteStatus.CONFIRMED,
    ];

    for (let i = 0; i < 100; i++) {
      const randomStatus = this.randomInt(availableStatus.length);

      quotes.push({
        id: i + 1,
        idStr: '#000' + (i + 1),
        product: 'Test Product',
        from: 'Mexico',
        to: 'USA',
        status: availableStatus[randomStatus],
        expirationDate: this.randomDate(new Date(), new Date(2023, 11, 25)),
      });
    }

    return of(quotes);
  }

  getInvoices(): Observable<Invoice[]> {
    const invoices: Invoice[] = [];

    for (let i = 0; i < 30; i++) {
      invoices.push({
        id: i,
        idStr: '#000' + (i + 1),
        quoteNumber: '#123' + (i + 1),
        urlXML: 'https://www.w3schools.com/xml/plant_catalog.xml',
        urlPDF: 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
      });
    }

    return of(invoices);
  }

  getShipment(reference: string) {
    return of(this.randomShipment(reference));
  }

  getShipments(): Observable<Shipment[]> {

    const shipments: Shipment[] = [];

    for (let i = 0; i < 50; i++) {
      shipments.push(this.randomShipment('0000' + i));
    }

    return of(shipments);
  }

  private randomShipment(ref: string) {
    return {
      id: Math.random(),
      shipmentRef: ref,
      isotankStatus: 'Timestamp',
      product: 'Product',
      billLanding: '********',
      transportType: 'Land transportation',
      currentStatus: {
        status: ShipmentStatusEnum.SET_SAIL,
        date: new Date()
      },
      status: [{
        status: ShipmentStatusEnum.PICK_UP,
        date: new Date()
      }, {
        status: ShipmentStatusEnum.SET_SAIL,
        date: new Date()
      }],
      origin: 'Veracruz',
      destiny: 'Taiwan',
      sealNumber: ref,
      estimatedTimeArrival: new Date(),
      estimatedTimeDeparture: new Date(),
      cutOffDate: new Date(),
      weight: '500 Ton',
      grossWeight: '600 Ton',
      quantity: 2,
      clientDocuments: [{
        name: 'Client document 1',
        url: '',
        date: new Date()
      },
      {
        name: 'Client document 2',
        url: '',
        date: new Date()
      }],
      LoopDocuments: [{
        name: 'Loop document 1',
        url: '',
        date: new Date()
      },
      {
        name: 'Loop document 2',
        url: '',
        date: new Date()
      },
      {
        name: 'Loop document 3',
        url: '',
        date: new Date()
      },
      {
        name: 'Loop document 4',
        url: '',
        date: new Date()
      }],
      quoteInvoice: [{
        name: 'Quote document 1',
        url: '',
        date: new Date()
      },
      {
        name: 'Quote document 2',
        url: '',
        date: new Date()
      }],
    };
  }

  private randomInt(maximum: number) {
    const randNum = Math.floor(Math.random() * maximum);
    return randNum;
  }

  private randomDate(start: Date, end: Date) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
}
