import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { OFFERED_SERVICES } from '../../../../../shared/constants/constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  responsiveOptions;
  services = OFFERED_SERVICES;

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  Carousel.prototype.onTouchMove = () => { };
  }
}
