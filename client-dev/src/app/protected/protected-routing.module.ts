import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuotationsComponent } from './pages/quotations/quotations.component';
import { ShipmentsComponent } from './pages/shipments/shipments.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { QuotePreviewComponent } from './pages/quote-preview/quote-preview.component';
import { ValidateTokenGuard } from '../shared/guards/validate-token.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuoteServiceComponent } from './pages/quote-service/quote-service.component';
import { ShipmentRefComponent } from './pages/shipment-ref/shipment-ref.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [ValidateTokenGuard],
        canLoad: [ValidateTokenGuard],
      },
      {
        path: 'quotations',
        component: QuotationsComponent,
        canActivate: [ValidateTokenGuard],
        canLoad: [ValidateTokenGuard],
      },
      {
        path: 'quotations/:id',
        component: QuotePreviewComponent,
        canActivate: [ValidateTokenGuard],
        canLoad: [ValidateTokenGuard],
      },
      {
        path: 'shipments',
        component: ShipmentsComponent,
        canActivate: [ValidateTokenGuard],
        canLoad: [ValidateTokenGuard],
      },
      {
        path: 'shipment/:id',
        component: ShipmentRefComponent,
        canActivate: [ValidateTokenGuard],
        canLoad: [ValidateTokenGuard],
      },
      {
        path: 'invoices',
        component: InvoicesComponent,
        canActivate: [ValidateTokenGuard],
        canLoad: [ValidateTokenGuard],
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        canActivate: [ValidateTokenGuard],
        canLoad: [ValidateTokenGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ValidateTokenGuard],
        canLoad: [ValidateTokenGuard],
      },
      {
        path: 'quote-service',
        component: QuoteServiceComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
