import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log(message, data?) {
    if (environment.production) { return; }

    console.log(message, data);
  }

  warn(message, data?) {
    if (environment.production) { return; }

    console.warn(message, data);
  }

  error(message, data?) {
    if (environment.production) { return; }

    console.error(message, data);
  }
}
