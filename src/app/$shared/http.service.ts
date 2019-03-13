import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root',
})
export class HttpService {

    readonly HTTP_OPTIONS = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    constructor(private http: HttpClient, private configService: ConfigService) { }

    get<T>(url: string): Observable<T> {
        return this.configService.init()
            .pipe(
                switchMap(config => this.http.get<T>(`${config.url_base}${url}`, this.HTTP_OPTIONS)),
                catchError(this.handleError<T>())
            );
    }

    post<T>(url: string, body: any): Observable<T> {
        return this.configService.init()
            .pipe(
                switchMap(config => this.http.post<T>(`${config.url_base}${url}`, body, this.HTTP_OPTIONS)),
                catchError(this.handleError<T>())
            );
    }

    put<T>(url: string, body: any): Observable<T> {
        return this.configService.init()
            .pipe(
                switchMap(config => this.http.put<T>(`${config.url_base}${url}`, body, this.HTTP_OPTIONS)),
                catchError(this.handleError<T>())
            );
    }

    delete<T>(url: string): Observable<T> {
        return this.configService.init()
            .pipe(
                switchMap(config => this.http.delete<T>(`${config.url_base}${url}`, this.HTTP_OPTIONS)),
                catchError(this.handleError<T>())
            );
    }

    private handleError<T>() {
        return (error: any): Observable<T> => {
            throw (error as T);
        };
    }
}
