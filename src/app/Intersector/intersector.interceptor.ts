import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinerService } from '../services/spiner.service';

@Injectable()
export class IntersectorInterceptor implements HttpInterceptor {

  constructor(private spiner:SpinerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spiner.show();
    return next.handle(request).pipe(
      finalize(()=>this.spiner.hide())
    );
  }
}
