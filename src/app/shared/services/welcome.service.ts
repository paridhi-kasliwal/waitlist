import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})

export class WelcomeService {
  constructor(private httpClient: HttpClient) {}

  onSubscribe(data) {
    return this.httpClient.post(`${Constants.backendUrl}subscribe-user/`, data);
  }

  getUsers() {
    return this.httpClient.get(`${Constants.backendUrl}users/`);
  }

  deleteUsers() {
    return this.httpClient.delete(`${Constants.backendUrl}users/`);
  }

  getLeader() {
    return this.httpClient.get(`${Constants.backendUrl}leaders/`)
  }
}
