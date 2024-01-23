import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';
import { OFFERED_SERVICES } from '../../constants/constants';
import { User } from '../../../auth/interfaces/user.interface';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FooterComponent implements OnDestroy {

  services = OFFERED_SERVICES;
  userSubscription!: Subscription;
  loggedUser: User | null = null;

  constructor(private auth: AuthService, private navigation: NavigationService) {
    this.userSubscription = this.auth.loggedUser.subscribe((user: any) => {
      this.loggedUser = user;
    });
  }

  public navigateToSection(id: string, yOffset: number = -50) {
    try {
      setTimeout(() => {
        this.navigation.navigateToSection(id, yOffset);
      }, 400);
    } catch (e) {}
  }

  ngOnDestroy(): void {
    if(this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  navigateto() {
    window.open('https://loop.qwykportals.com/my-portal/dashboard?view=ops', '_blank')
  }
}
