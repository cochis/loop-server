import { Component, ViewEncapsulation } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation.service';

@Component({
  selector: 'app-quote-preview',
  templateUrl: './quote-preview.component.html',
  styleUrls: ['./quote-preview.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class QuotePreviewComponent {

  displayReject: boolean = false;
  declineReason: string = '';
  displayConfirmation: boolean = false;

  titleMesasge: string = '';
  message: string = '';

  quote: string = '00000';

  constructor(
    private confirmationService: ConfirmationService,
    private translate: TranslateService,
    private router: Router,
    navigation: NavigationService
  ) {
    navigation.navigateToTop(250);
  }

  confirm() {
    this.confirmationService.confirm({
      message: this.translate.instant('quote_preview.confirmation_message'),
      accept: () => {
        this.titleMesasge = this.translate.instant('quote_preview.confirmation_title_success');
        this.message = this.translate.instant('quote_preview.confirmation_success').replace('%quote%', '#' + this.quote);
        this.displayConfirmation = true;
      },
    });
  }

  decline() {
    this.titleMesasge = this.translate.instant('quote_preview.reject_title');
    this.message = this.translate.instant('quote_preview.reject_success');
    this.displayReject = false;
    this.displayConfirmation = true;
  }

  repost() {
    this.titleMesasge = this.translate.instant('quote_preview.repost_title');
    this.message = this.translate.instant('quote_preview.repost_success');
    this.displayReject = false;
    this.displayConfirmation = true;
  }

  openDecline() {
    this.displayReject = true;
  }

  closeToast() {
    this.router.navigate(['/dashboard/quotations']);
  }
}
