import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {

  carousel: any[] = [
    {
      name: 'slide1',
      className: 'carousel-item active'
    },
    {
      name: 'slide2',
      className: 'carousel-item'
    },
    {
      name: 'slide3',
      className: 'carousel-item'
    },
  ];

}
