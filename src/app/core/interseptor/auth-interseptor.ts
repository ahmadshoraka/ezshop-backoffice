import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/services/auth.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private accessToken!: string;
    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private injector: Injector) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        const authService = this.injector.get(AuthService);
        this.accessToken = authService.access_token;
        req = this.setHeaders(req);

        return next.handle(req).pipe(catchError(error => {
            if (error && error.status === 401) {
                if (!this.accessToken || (req.body + '').split('&').includes('grant_type=refresh_token')) {
                    authService.logOut();
                    this.injector.get(Router).navigate(['./auth']);
                }
                if (this.refreshTokenInProgress) {
                    return this.refreshTokenSubject.pipe(
                        filter(result => result !== null),
                        take(1),
                        switchMap(() => next.handle(this.setHeaders(req))),
                    );
                } else {
                    this.refreshTokenInProgress = true;
                    this.refreshTokenSubject.next(null);
                    return authService.refreshAccessToken().pipe(
                        switchMap(data => {
                            this.accessToken = data.access_token;
                            this.refreshTokenSubject.next(data.access_token);
                            return next.handle(this.setHeaders(req));
                        }),
                        catchError(
                            // tslint:disable-next-line: no-shadowed-variableCyberPoliceComponent
                            error => {
                                authService.logOut();
                                this.injector.get(Router).navigateByUrl('/auth');
                                throw error;
                            },
                        ),

                        finalize(() => {
                            this.refreshTokenInProgress = false;
                        }),
                    );
                }

            } else if (error && (error.status === 504 || error.status === 0)) {
                if (environment.production) {
                    this.injector.get(Router).navigate(['/noConnection']);
                    throw error;
                } else {
                    return throwError(error);
                }
            } if (error && (error.status === 403)) {
                localStorage.clear();
                this.injector.get(Router).navigate(['./auth']);
                throw error;
            } else {
                return throwError(error);
            }
        }));

    }

    private setHeaders(request: HttpRequest<any>): HttpRequest<any> {

        const authService = this.injector.get(AuthService);
        if (request.url.indexOf('/open/v1/sensor/current-date') !== -1) {
            return request.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': '*',
                    rejectUnauthorized: 'false',
                    'client-ip': localStorage.getItem('IpAddress') || ''
                },
            });
        }
        if (request.url.includes(authService.loginPasswordApi)
            || request.url.includes(authService.loginValidationApi)
            || request.url.includes(authService.refreshTokenApi)) {
            return request.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': '*',
                    rejectUnauthorized: 'false',
                    'client-ip': localStorage.getItem('IpAddress') || ''
                },
            });
        } else {
            return request.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': '*',
                    rejectUnauthorized: 'false',
                    Authorization: this.accessToken ? 'Bearer ' + this.accessToken : '',
                    'client-ip': localStorage.getItem('IpAddress') || ''
                },
            });
        }
    }

}
