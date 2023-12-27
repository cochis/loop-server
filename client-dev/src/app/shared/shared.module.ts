import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { FooterComponent } from './components/footer/footer.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { ShipmentDetailComponent } from './components/shipment-detail/shipment-detail.component';

@NgModule({
  declarations: [
    FooterComponent,
    LanguageSelectorComponent,
    ShipmentDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    TranslateModule,
    DropdownModule
  ],
  exports: [
    FooterComponent,
    LanguageSelectorComponent,
    ShipmentDetailComponent
  ]
})
export class SharedModule { }
