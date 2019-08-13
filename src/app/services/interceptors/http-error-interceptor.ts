import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';
import {Observable, of, throwError} from 'rxjs/index';
import {LoggerService} from '../logger.service';
import {Router} from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  HTTP_STATUS_CODE: {0: {msg: 'No connection with server!'}};

  constructor(private logger: LoggerService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError(
          (error: any, caught: Observable<HttpEvent<any>>) => {

            if (error instanceof  ErrorEvent) {
              this.logger.error('Client side error: ', error);
            } else {
              this.logger.error('Server side error: ',  error);
              if (error.status === 0) {
                error.message = 'No connection with server';
              } else if (error.status === 404) {

                this.router.navigate(['/error']);

                return of(error);
              }
            }
            return throwError(error);
          }
        )
      );
  }

}
