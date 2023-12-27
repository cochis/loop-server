import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidatorService } from 'src/app/shared/services/validator.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnDestroy {
  form = this.fb.group({
    username: ['', Validators.required],
    keepLogged: [true],
  });
  message: string = '';
  subscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    public validator: ValidatorService
  ) {}

  onSubmit() {
    this.message = '';
    if (this.form.valid) {
      const form = this.form.value;
      console.log(form);
    } else {
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field)!;
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
