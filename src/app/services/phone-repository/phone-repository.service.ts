import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PhoneRepositoryService {

  constructor(private http: Http) {}

  getOne(phoneId) {
    return this.http
      .get(`api/${phoneId}.json`).toPromise()
      .then((response) => response.json());
  }

  getAll() {
    return this.http
      .get('api/phones.json').toPromise()
      .then((response) => response.json());
  }
}
