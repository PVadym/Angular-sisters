import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs/index';
import {catchError, map} from 'rxjs/internal/operators';
import {Router} from '@angular/router';
import {LoggerService} from '../logger.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private logger: LoggerService) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');
    console.log('Token' + token);
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: any) => {
        this.logger.error(error);
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
        if (error.status === 400) {
          this.router.navigate(['/error']);
          return of(error);
        }
        return throwError(error);
      }
      ));
  }
}
