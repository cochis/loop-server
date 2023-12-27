import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-offered-services',
  templateUrl: './offered-services.component.html',
  styleUrls: ['./offered-services.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OfferedServicesComponent implements OnInit, OnDestroy {
  serviceId: number = 0;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navigation: NavigationService
  ) {
    this.subscription = router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((val: any) => {
        this.serviceId = Number(val.url.split('/')[3]);
      });
  }

  ngOnInit(): void {
    this.navigation.navigateToTop();
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));
  }

  goToServices() {
    this.router.navigate(['/home']);

    setTimeout(() => {
      this.navigation.navigateToSection('services_section')
    }, 200);
  }

  prevService() {
    let newService = this.serviceId - 1;

    if(newService < 1) {
      newService = 5;
    }
    this.serviceId = newService;
    this.router.navigate(['/home/services/', newService]);
  }

  nextService() {
    let newService = this.serviceId + 1;

    if(newService > 5) {
      newService = 1;
    }

    this.serviceId = newService;
    this.router.navigate(['/home/services/', newService]);
  }

  ngOnDestroy(): void {
      if(this.subscription) {
        this.subscription.unsubscribe();
      }
  }
}
