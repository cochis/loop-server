import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { NgModule } from '@angular/core';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProtectedRoutingModule } from './protected-routing.module';
import { QuotationsComponent } from './pages/quotations/quotations.component';
import { SharedModule } from '../shared/shared.module';
import { ShipmentsComponent } from './pages/shipments/shipments.component';
import { DashboardService } from './services/dashboard.service';
import { TranslateModule } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { QuotePreviewComponent } from './pages/quote-preview/quote-preview.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuoteServiceComponent } from './pages/quote-service/quote-service.component';
import { ShipmentRefComponent } from './pages/shipment-ref/shipment-ref.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InvoicesComponent,
    NotificationsComponent,
    QuotationsComponent,
    ShipmentsComponent,
    QuotePreviewComponent,
    ProfileComponent,
    QuoteServiceComponent,
    ShipmentRefComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProgressBarModule,
    ProtectedRoutingModule,
    SharedModule,
    TranslateModule,
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    RadioButtonModule,
    ReactiveFormsModule,
  ],
  providers: [DashboardService, ConfirmationService, MessageService],
})
export class ProtectedModule {}
