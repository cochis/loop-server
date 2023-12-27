import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { ResponseAPI } from 'src/app/shared/interfaces/response-api.interface';

@Injectable()
export class ContactService {
  sendContact(formContact: any): Observable<ResponseAPI> {
    const response: ResponseAPI = {
      code: 200,
      message: '',
    };

    return of(response).pipe(take(1));
  }
}
