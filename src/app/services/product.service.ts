import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ApiService} from './api.service';
import {map, retry} from 'rxjs/internal/operators';
import {ApiResponse} from './api-response';
import {Observable} from 'rxjs/index';
import {Product} from '../product/product';
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'multipart/mixed'
    }),
    observe: 'response' as 'body'
  };



  constructor(private http: HttpClient,
              private rest: ApiService,
              private logger: LoggerService) { }

  getAllProducts(): Observable<ApiResponse> {
    return this.http.get(`${this.rest.api}/products`,  this.rest.httpOptions)
      .pipe(map(this.rest.mapFunc));
  }

  saveOrUpdateProduct(p: Product, file: FormData): Observable<ApiResponse> {
    if (p.id != null) {
      console.log('put');
      console.log(file.get('file'));
      console.log(file.get('product'));
      return this.http.put(`${this.rest.api}/products/${p.id}`, file, this.httpOptions)
        .pipe(map(this.rest.mapFunc));

    } else {
      console.log('post');
      console.log(file.get('file'));
      console.log(file.get('product'));
      return this.http.post(`${this.rest.api}/products`, file, this.httpOptions)
        .pipe(map(this.rest.mapFunc));
    }
  }

  deleteProduct(id: number): Observable<ApiResponse> {
    console.log('to delete ' + id + `${this.rest.api}/products/${id}`);
    return this.http.delete(`${this.rest.api}/products/${id}`, this.rest.httpOptions)
      .pipe(map(this.rest.mapFunc));
  }

  getProductById(id: any): Observable<ApiResponse> {
    let url = `${this.rest.api}/products/${id}`;
    this.logger.log('get product ' + id + ' by url ' + url);
    return this.http.get(url, this.rest.httpOptions)
      .pipe(map(this.rest.mapFunc));
  }

}
