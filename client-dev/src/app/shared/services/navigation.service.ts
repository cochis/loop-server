import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navigateToTop(timeout: number = 0) {
    setTimeout(() => {
      this.navigateToSection('main-container', -120);
    }, timeout)
  }

  navigateToSection(id: string, yOffset: number = -50) {
    try {
      const element: any = document.getElementById(id);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    } catch (e) {}
  }
}
