import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavMenuComponent implements OnInit, OnDestroy {
  public innerWidth: number = 0;
  logo: string;
  isTransparent: boolean = true;
  isDashboard: boolean = false;
  isHidden: boolean = false;
  subscription: Subscription;

  userSubscription!: Subscription;
  loggedUser: User | null = null;
 
  constructor(
    private router: Router,
    private navigation: NavigationService,
    private auth: AuthService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.logo = '';

    this.subscription = router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((val: any) => {
        this.isTransparent = val.url === '/home' || val.url === '/';
        this.isDashboard = val.urlAfterRedirects.includes('dashboard');
        this.isHidden = val.url.includes('auth');

        if (this.isDashboard) {
          this.isTransparent = true;
          this.renderer.addClass(this.document.body, 'logo-dashboard');
        } else {
          this.renderer.removeClass(this.document.body, 'logo-dashboard');
        }

        if (!this.isTransparent || this.isDashboard) {
          this.logo = 'logo-pink';
        } else {
          this.logo = 'logo';
          this.onWindowScroll();
        }
      });

    this.userSubscription = this.auth.loggedUser.subscribe((user: any) => {
      this.loggedUser = user;
    });
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.onWindowScroll();
  }

  public navigateToSection(id: string, yOffset: number = -50) {
    try {
      setTimeout(() => {
        this.navigation.navigateToSection(id, yOffset);
      }, 400);
    } catch (e) { }
  }

  logout() {
    this.auth.logout();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.isTransparent) {
      return;
    }

    let element = document.querySelector('.navbar') as HTMLElement;

    if (!element) {
      return;
    }

    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('inverse');
      this.logo = 'logo-pink';
    } else {
      element.classList.remove('inverse');
      if (this.isDashboard) {
        this.logo = 'logo-pink';
      } else {
        this.logo = 'logo';
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
  navigateto() {
    window.open('https://loop.qwykportals.com/my-portal/dashboard?view=ops', '_blank')
  }
}
