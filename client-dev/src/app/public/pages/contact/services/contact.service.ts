import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { ResponseAPI } from 'src/app/shared/interfaces/response-api.interface';
import { environment } from 'src/env/environment';
const base_url = environment.base_url
@Injectable()
export class ContactService {

  
  constructor(private http: HttpClient) { }
 
   
  sendContact(formContact: any): Observable<any> {
    return this.http.post(`${base_url}/mailer/sendContacto`, formContact)
  }
}
