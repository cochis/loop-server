import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../../../shared/services/navigation.service';
import { Map, Popup, Marker, NavigationControl } from 'mapbox-gl';
import { environment } from '../../../../env/environment';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validator.service';
import { ContactService } from './services/contact.service';
import { Subscription } from 'rxjs';
import { ResponseAPI } from '../../../shared/interfaces/response-api.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ContactComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  map!: Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 26.507855368773555;
  lng = -80.19337591520025;
  displayConfirmation: boolean = false;

  isError: boolean = false;
  titleMesasge: string = '';
  message: string = '';

  formContact = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    business: ['', Validators.required],
    contactReason: ['', Validators.required],
    notes: ['', Validators.required],
  });

  constructor(
    public navigation: NavigationService,
    private translate: TranslateService,
    private fb: FormBuilder,
    public validator: ValidatorService,
    private contactService: ContactService
  ) {
    navigation.navigateToTop(250);
  }

  ngOnInit(): void {
    this.map = new Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 11,
      center: [this.lng, this.lat],
    });

    this.map.addControl(new NavigationControl());

    const markerTitle = this.translate.instant('contact.marker_title');

    // US OFFICE
    new Marker({
      color: 'red',
    })
      .setLngLat([this.lng, this.lat])
      .setPopup(
        new Popup().setHTML(`
          <h6><b>${markerTitle} - ${this.translate.instant(
          'contact.us_office'
        )}</b></h6>
          <a href="https://maps.google.com/?q=${this.lat},${
          this.lng
        }" target="_blank">Directions</a>
        `)
      )
      .addTo(this.map);

    // MEXICO OFFICE
    new Marker({
      color: 'red',
    })
      .setLngLat([-99.16715885989345, 19.41910444939983])
      .setPopup(
        new Popup().setHTML(`
          <h6><b>${markerTitle} - ${this.translate.instant(
          'contact.mexico_office'
        )}</b></h6>
          <a href="https://maps.google.com/?q=19.41910444939983,-99.16715885989345" target="_blank">Directions</a>
        `)
      )
      .addTo(this.map);

    // EUROPE OFFICE
    new Marker({
      color: 'red',
    })
      .setLngLat([-3.692818357723195, 40.44846225129876])
      .setPopup(
        new Popup().setHTML(`
          <h6><b>${markerTitle} - ${this.translate.instant(
          'contact.europe_office'
        )}</b></h6>
          <a href="https://maps.google.com/?q=40.44846225129876,-3.692818357723195" target="_blank">Directions</a>
        `)
      )
      .addTo(this.map);
  }

  submitContact() {
    if (!this.formContact.valid) {
      return;
    }

    this.message = '';
    this.titleMesasge = '';

    this.subscription = this.contactService
      .sendContact(this.formContact.value)
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
      this.formContact.reset();
    }
    this.displayConfirmation = false;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
