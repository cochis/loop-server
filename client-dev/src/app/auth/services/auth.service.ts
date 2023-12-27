import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: any = new BehaviorSubject(this.loadUser());

  constructor(private router: Router) {}

  getDefaultStorage() {
    return sessionStorage.getItem('keep_me_logged') !== undefined && sessionStorage.getItem('keep_me_logged') !== null ? sessionStorage : localStorage;
  }

  loadUser() {
    const storage = this.getDefaultStorage();
    if (storage.getItem('token')) {
      return storage.getItem('user')
        ? JSON.parse(storage.getItem('user')!)
        : null;
    } else {
      return null;
    }
  }

  login(username: string, password: string, keepLogged: boolean) {
    const isValid = username === 'fer' && password === 'fer';

    if (isValid) {
      const user: User = {
        id: 1,
        name: 'Fernando',
        lastName: 'Gomez',
        company: 'Teradata',
        photo: null,
      };

      let storage = null;
      if(keepLogged) {
        storage = localStorage;
      } else {
        storage = sessionStorage;
      }
      storage.setItem('token', '5454234254fgvsd4f5sad51');
      storage.setItem('user', JSON.stringify(user));
      storage.setItem('keep_me_logged', 'true');

      this.loggedUser.next(user);
    }

    return of(isValid);
  }

  logout() {
    const storage = this.getDefaultStorage();
    storage.removeItem('token');
    storage.removeItem('user');
    storage.removeItem('keep_me_logged');
    storage.removeItem('defaultLanguage');
    this.loggedUser.next(null);
    this.router.navigate(['/home']);
  }

  revalidateUser() {
    const storage = this.getDefaultStorage();
    let valid = false;

    const token = storage.getItem('token');

    if (token) {
      valid = true;
    }

    return of(valid);
  }
}
