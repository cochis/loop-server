import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ValidatorService } from '../../../shared/services/validator.service';
import { FormBuilder, Validators } from '@angular/forms';

interface PrefixPhone {
  prefix: number;
  flag: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  prefixes: PrefixPhone[] = [
    {
      prefix: 52,
      flag: '/assets/img/ES.png'
    },
    {
      prefix: 1,
      flag: '/assets/img/EN.png'
    }
  ]

  prefix: string | null = null;

  form = this.fb.group({
    username: ['', Validators.required],
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    company: ['', Validators.required],
    job: ['', Validators.required],
    location: ['', Validators.required],
    country: ['', Validators.required],
    phone: ['', Validators.required],
    agreeData: [false, Validators.requiredTrue],
    agreeMarketing: [false],
  });
  message: string = '';

  constructor(
    private fb: FormBuilder,
    public validator: ValidatorService,
    private translate: TranslateService
  ) { }

  onSubmit() {
    this.message = '';

    if(this.prefix == null) {
      this.prefix = '';
    }

    if (this.form.valid && this.prefix) {
      const form: any = this.form.value;
      form['prefix'] = this.prefix;
      console.log(form);
    } else {
      Object.keys(this.form.controls).forEach((field) => {
        const control = this.form.get(field)!;
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  changePrefix(prefix: string) {
    this.prefix = prefix;
  }
}
