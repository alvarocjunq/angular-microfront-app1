import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    private jsonFile$: Observable<any>;
    private jsonFile: any;

    constructor(private http: HttpClient) { }

    init() {
        // Cache file
        if (this.jsonFile) {
            return of(this.jsonFile);
        }

        // Cache Observable
        if (!this.jsonFile$) {
            this.jsonFile$ = this.http.get('assets/env/url.config.json').pipe(share());
        }

        return this.jsonFile$.pipe(map(file => this.jsonFile = file));
    }
}
