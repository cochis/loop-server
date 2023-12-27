import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../shared/services/navigation.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent {

  constructor(navigation: NavigationService) {
    navigation.navigateToTop(250);
  }

}
