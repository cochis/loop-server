import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OfferedServicesComponent } from './pages/offered-services/offered-services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AvisoComponent } from './pages/aviso/aviso.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'services/:id',
        component: OfferedServicesComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'aviso',
        component: AvisoComponent
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
export class PublicRoutingModule {}
