import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ConfigService } from './config.service';
import { HttpService } from './http.service';

describe('Http Service', () => {
    let httpClientSpy: {
        get: jasmine.Spy,
        post: jasmine.Spy,
        put: jasmine.Spy,
        delete: jasmine.Spy
    };
    let configServiceSpy: jasmine.SpyObj<ConfigService>;
    let httpService: HttpService;
    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
        configServiceSpy = jasmine.createSpyObj('ConfigService', ['init']);
        TestBed.configureTestingModule({
            providers: [
                HttpService,
                { provide: ConfigService, useValue: configServiceSpy },
                { provide: HttpClient, useValue: httpClientSpy },
            ],
        });
        httpService = TestBed.get(HttpService);
        configServiceSpy = TestBed.get(ConfigService);
        configServiceSpy.init.and.returnValue(of({ 'url_base': 'https://url/mock/' }));
    });

    it('should make the POST verb', () => {
        httpClientSpy.post.and.returnValue(of({}));
        httpService.post('myurl', {}).subscribe();

        expect(httpClientSpy.post.calls.count()).toBe(1, 'POST called once');
    });

    it('should make the GET verb', () => {
        httpClientSpy.get.and.returnValue(of({}));
        httpService.get('myurl/123').subscribe();

        expect(httpClientSpy.get.calls.count()).toBe(1, 'GET called once');
    });

    it('should make the PUT verb', () => {
        httpClientSpy.put.and.returnValue(of({}));
        httpService.put('myurl/123', {}).subscribe();

        expect(httpClientSpy.put.calls.count()).toBe(1, 'PUT called once');
    });

    it('should make the DELETE verb', () => {
        httpClientSpy.delete.and.returnValue(of({}));
        httpService.delete('myurl/123').subscribe();

        expect(httpClientSpy.delete.calls.count()).toBe(1, 'DELETE called once');
    });

    it('should execute the HANDLE ERROR', () => {
        httpClientSpy.get.and.throwError('test 404 error');
        httpService.get('myurl/123').subscribe(
            _ => fail('expected an error'),
            error => expect(error.message).toContain('404')
        );

        expect(httpClientSpy.get.calls.count()).toBe(1, 'GET called once');
    });
});
