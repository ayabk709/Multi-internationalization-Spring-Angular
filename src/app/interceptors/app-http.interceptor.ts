import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Exclude adding Authorization header for login endpoint
    if (req.url.includes("/auth/login")) {
      return next.handle(req);
    }

    // Clone the request and set the new headers
    const newRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    });

    // Pass the cloned request instead of the original request to the next handler
    return next.handle(newRequest).pipe(
      catchError((error) => {
          if (error.status === 401) {
            this.authService.logout();
          }
          throw error;
        }
      )
    );


}
  }

