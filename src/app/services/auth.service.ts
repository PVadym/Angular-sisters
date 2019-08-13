import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoggerService} from './logger.service';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/index';
import {tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;
  apiUrl = this.rest.api + '/auth';


  constructor(private http: HttpClient,
              private rest: ApiService,
              private log: LoggerService) { }

  login(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/login', data)
      .pipe(
        tap(_ => this.isLoggedIn = true));
  }

  logout() {
    console.log('logout');
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    // return this.http.get<any>(this.apiUrl + '/logout')
    //   .pipe(
    //     tap(_ => this.isLoggedIn = false));
  }

  register(data: any): Observable<any> {
    console.log(data);
    return this.http.post<any>(this.apiUrl + '/register', data)
      .pipe(
        tap(_ => this.log.log('login')));
  }


}
