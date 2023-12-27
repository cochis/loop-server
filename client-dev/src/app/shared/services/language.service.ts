import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService, private auth: AuthService) {}

  initializeLanguage() {
    const storage = this.auth.getDefaultStorage();
    const lang: string = storage.getItem('defaultLanguage')
      ? storage.getItem('defaultLanguage')!
      : 'en';

    this.translate.setDefaultLang(lang);
    this.translate.addLangs(['en', 'es']);
    this.translate.use(lang);
  }

  getLanguage() {
    return this.translate.currentLang;
  }

  changeLanguage(language: string) {
    const storage = this.auth.getDefaultStorage();
    this.translate.use(language);
    storage.setItem('defaultLanguage', language);
  }
}
