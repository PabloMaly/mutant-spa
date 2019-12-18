import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MutantService {
  users: Observable<any>;

  constructor(private  httpClient: HttpClient) {}

    getUsers(value: string) {
        return this.httpClient.post('http://localhost:8080/mutant', value, {responseType: 'text'});
    }
}
