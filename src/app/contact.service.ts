import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactModel} from './model/ContactModel';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = '';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  PostMessage(input: any) {
    return this.http.post(this.api, input, {responseType: 'text'})
      .pipe(
      map(
        (response) => {
          if (response) {
            return response;
          } else {
            return null;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
