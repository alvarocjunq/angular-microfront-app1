import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, defer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ConfigService } from './config.service';

describe('Config Service', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let configService: ConfigService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        TestBed.configureTestingModule({
            providers: [
                ConfigService,
                { provide: HttpClient, useValue: httpClientSpy },
            ],
        });
        configService = TestBed.get(ConfigService);
    });

    it('should get the configuration JSON', () => {
        const expectedJson = JSON.stringify({ 'url_base': 'https://url/mock/' });
        httpClientSpy.get.and.returnValue(of(expectedJson));

        configService.init().subscribe((json) => {
            expect(json).toEqual(expectedJson, 'expected json file');
        }, fail);

        expect(httpClientSpy.get.calls.count()).toBe(1, 'GET called once');
    });

    it('should get ERROR to get the configuration JSON', () => {
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found'
        });

        httpClientSpy.get.and.returnValue(asyncError(errorResponse));
        configService.init().subscribe(
            _ => fail('expected an error'),
            res => expect(res.error).toContain('test 404 error')
        );

        expect(httpClientSpy.get.calls.count()).toBe(1, 'GET called once');
    });

    it('should CACHE the JSON content in the second call', () => {
        const expectedJson = JSON.stringify({ 'url_base': 'https://url/mock/' });
        httpClientSpy.get.and.returnValue(of(expectedJson));

        configService.init()
            .pipe(switchMap(() => configService.init()))
            .subscribe(json => {
                expect(json).toEqual(expectedJson, 'expected json file');
            }, fail);

        expect(httpClientSpy.get.calls.count()).toBe(1, 'GET called once');
    });

});

export function asyncError(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}
