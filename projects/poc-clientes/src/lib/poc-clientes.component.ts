import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PocClientesService } from './poc-clientes.service';

@Component({
  selector: 'poc-poc-clientes',
  template: '<router-outlet name="poc-poc-clientes"></router-outlet>',
  styles: []
})
export class PocClientesComponent implements OnInit, OnChanges {

  @Input()
  value: string;

  constructor(private clientesService: PocClientesService) { }

  ngOnInit() {
    // this.clientesService.valueFilter = this.value;
  }

  ngOnChanges() {
    this.clientesService.valueFilter$.next(this.value);
  }

}
