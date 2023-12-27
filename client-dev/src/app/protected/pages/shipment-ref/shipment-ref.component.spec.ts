import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentRefComponent } from './shipment-ref.component';

describe('ShipmentRefComponent', () => {
  let component: ShipmentRefComponent;
  let fixture: ComponentFixture<ShipmentRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
