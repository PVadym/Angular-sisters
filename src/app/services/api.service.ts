import {environment} from '../../environments/environment.local';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: string = environment.api;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
    observe: 'response' as 'body'
  };

  constructor(private router: Router) { }



  mapFunc = r => {
    console.log(r);
    const res = r.body;

    return {
      data: res == null ?  {} : res.data
    };
  }


}
