import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validator.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    keepLogged: [true]
  });
  message: string = '';
  subscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    public validator: ValidatorService,
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService
  ) {}

  onSubmit() {

    this.message = '';

    if (this.form.valid) {
      const form = this.form.value;
      this.subscription = this.authService.login(form.username!, form.password!, form.keepLogged!).subscribe((valid: boolean) => {
        if(valid) {
          this.router.navigate(['/dashboard']);
        } else {
          this.message = this.translate.instant('auth.login.invalid_user_password');
        }
      })
    } else {
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field)!;
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  ngOnDestroy(): void {
      if(this.subscription) {
        this.subscription.unsubscribe();
      }
  }
}
