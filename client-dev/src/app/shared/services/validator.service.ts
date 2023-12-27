import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  constructor() {}

  validFormField(form: FormGroup, property: string) {
    if (!form || !form.get(property)) {
      return false;
    }

    return (
      form.get(property)!.invalid &&
      (form.get(property)!.dirty || form.get(property)!.touched)
    );
  }
}
