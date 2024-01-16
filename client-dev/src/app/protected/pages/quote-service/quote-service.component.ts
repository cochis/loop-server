import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/public/pages/contact/services/contact.service';
import { OFFERED_SERVICES } from 'src/app/shared/constants/constants';
import { ResponseAPI } from 'src/app/shared/interfaces/response-api.interface';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { ValidatorService } from 'src/app/shared/services/validator.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-quote-service',
  templateUrl: './quote-service.component.html',
  styleUrls: ['./quote-service.component.scss']
})
export class QuoteServiceComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  services = OFFERED_SERVICES;
  displayConfirmation: boolean = false;
 
  isError: boolean = false;
  titleMesasge: string = '';
  message: string = '';

  formQuote = this.fb.group({
    first_name: ['', [Validators.required]],
    business: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    origin: ['', [Validators.required]],
    destiny: ['', [Validators.required]],
    type_merchandise: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    type_service: ['', [Validators.required]],
    incoterm: ['', [Validators.required]],
    special_request: ['', [Validators.required]],
  });
  constructor(
    public navigation: NavigationService,
    private translate: TranslateService,
    private fb: FormBuilder,
    public validator: ValidatorService,
    private dashboardService:DashboardService  ) {
    navigation.navigateToTop(250);
  }
  ngOnInit() {

  }

  submitQuote() {
    console.log('this.formQuote', this.formQuote)
    if (!this.formQuote.valid) {
      return;
    }

    this.message = '';
    this.titleMesasge = '';

    this.subscription = this.dashboardService
      .sendQuote(this.formQuote.value)
      .subscribe(
        (response: ResponseAPI) => {
          if (response.code === 200) {
            this.isError = false;
            this.titleMesasge = this.translate.instant('contact.success_title');
            this.message = this.translate.instant('contact.success_message');
          } else {
            this.isError = true;
            this.titleMesasge = this.translate.instant('contact.failed_title');
            this.message = this.translate.instant('contact.failed_message');
          }

          this.displayConfirmation = true;
        }
      );
  }
  closeContact() {
    if(!this.isError) {
      this.formQuote.reset();
    }
    this.displayConfirmation = false;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
