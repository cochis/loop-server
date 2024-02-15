import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../../../shared/services/navigation.service';
import { Map, Popup, Marker, NavigationControl } from 'mapbox-gl';
import { environment } from '../../../../env/environment';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validator.service';
import { DomSanitizer } from "@angular/platform-browser";
import { Subscription } from 'rxjs';
import { ResponseAPI } from '../../../shared/interfaces/response-api.interface';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.scss']
})
export class AvisoComponent {
  subscription!: Subscription;
  map!: Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 26.507855368773555;
  lng = -80.19337591520025;
  displayConfirmation: boolean = false;
  pdf: any
  lang = ''
  isError: boolean = false;
  titleMesasge: string = '';
  message: string = '';
  file: any
  formContact = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    business: ['', [Validators.required]],
    contactReason: ['', [Validators.required]],
    notes: ['', [Validators.required]],
  });

  constructor(
    public navigation: NavigationService,
    public translate: TranslateService,
    private fb: FormBuilder,
    public validator: ValidatorService,
    private sanitizer: DomSanitizer
  ) {
    navigation.navigateToTop(250);
    // Select file lang
    this.pdf = this.sanitizer.bypassSecurityTrustResourceUrl('/assets/docs/' + this.translate.instant('notice.file'));
    this.lang = this.translate.instant('notice.file')

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
          <a href="https://maps.google.com/?q=${this.lat},${this.lng
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


  }

  closeContact() {
    if (!this.isError) {
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
