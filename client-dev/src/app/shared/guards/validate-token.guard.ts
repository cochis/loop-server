import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard  {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    return this.authService.revalidateUser().pipe(
      tap(
        valid => {
          if(!valid) {
            this.router.navigateByUrl('/auth');
          }
        }
      )
    );
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authService.revalidateUser().pipe(
      tap(
        valid => {
          if(!valid) {
            this.router.navigateByUrl('/auth');
          }
        }
      )
    );
  }

}
