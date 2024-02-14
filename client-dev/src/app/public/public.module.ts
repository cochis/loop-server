import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateModule } from '@ngx-translate/core';
import { CarrouselComponent } from './pages/home/components/carrousel/carrousel.component';
import { TrackShipmentComponent } from './pages/home/components/track-shipment/track-shipment.component';
import { AboutUsComponent } from './pages/home/components/about-us/about-us.component';
import { ServicesComponent } from './pages/home/components/services/services.component';
import { ValuesComponent } from './pages/home/components/values/values.component';
import {CarouselModule} from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfferedServicesComponent } from './pages/offered-services/offered-services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactService } from './pages/contact/services/contact.service';
import { DialogModule } from 'primeng/dialog';
import { AvisoComponent } from './pages/aviso/aviso.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarrouselComponent,
    TrackShipmentComponent,
    AboutUsComponent,
    ServicesComponent,
    ValuesComponent,
    OfferedServicesComponent,
    ContactComponent,
    AvisoComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    GoogleMapsModule,
    TranslateModule,
    CarouselModule,
    DropdownModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [
    ContactService
  ]
})
export class PublicModule { }
