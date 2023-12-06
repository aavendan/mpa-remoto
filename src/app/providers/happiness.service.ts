import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HappinessService {

  //Atributo URL
  private URL: string = 'https://mpa-firebase-91d6c-default-rtdb.firebaseio.com/collection.json';
  
  constructor(private http:HttpClient) { }

  getResponse() {
    return this.http.get(this.URL);
  }
}
