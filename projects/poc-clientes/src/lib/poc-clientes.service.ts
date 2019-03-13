import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PocClientesService {

  public valueFilter$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  public getValue() {
    return this.valueFilter$;
  }

}
