import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LanguageSelectorComponent implements OnInit {

  selectedCountry: any;
  countries = [
    {name: 'EN', code: 'EN'},
    {name: 'ES', code: 'ES'}
  ];

  constructor(private languageService: LanguageService) {

  }

  ngOnInit(): void {
    const lang = (this.languageService.getLanguage());
    this.selectedCountry = { name: lang, code: lang };
  }

  changeLang(code: string) {
    this.selectedCountry.code = code;
    this.selectedCountry.name = code;
    this.languageService.changeLanguage(this.selectedCountry.code.toString().toLowerCase());
  }

}
