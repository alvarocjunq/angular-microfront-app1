import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { ContextService } from 'poc-arquitetura';
import { PocClientesService } from '../poc-clientes.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'poc-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit, OnDestroy {

  persons: Section[] = [
    { name: 'Alvaro Junqueira', updated: new Date('1/1/19') },
    { name: 'Joaquim Barbosa', updated: new Date('1/17/19') },
    { name: 'Rui Damas', updated: new Date('1/28/19') },
    { name: 'Rui Damas2', updated: new Date('1/28/19') },
    { name: 'Rui Damas3', updated: new Date('1/28/19') },
    { name: 'Rui Damas4', updated: new Date('1/28/19') },
    { name: 'Rui Damas5', updated: new Date('1/28/19') },
    { name: 'Rui Damas6', updated: new Date('1/28/19') },
    { name: 'Rui Damas7', updated: new Date('1/28/19') },
    { name: 'Rui Damas8', updated: new Date('1/28/19') },
    { name: 'Rui Damas9', updated: new Date('1/28/19') },
    { name: 'Rui Damas10', updated: new Date('1/28/19') },
    { name: 'Rui Damas11', updated: new Date('1/28/19') },
    { name: 'Rui Damas12', updated: new Date('1/28/19') },
    { name: 'Rui Damas13', updated: new Date('1/28/19') },
    { name: 'Rui Damas14', updated: new Date('1/28/19') },
    { name: 'Rui Damas15', updated: new Date('1/28/19') },
    { name: 'Pablo Martinez', updated: new Date('1/28/19') },
  ];

  list: Section[];
  private unsubscribe: Subject<void> = new Subject();
  value: string;

  constructor(private contextService: ContextService, private clientesService: PocClientesService,
    private router: Router) { }

  ngOnInit() {
    this.list = this.persons;
    this.clientesService.getValue()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(value => {
        this.filter(value);
        this.value = value;
      });
  }

  onClickPerson(person: Section) {
    this.contextService.setData(person);
    this.router.navigate([{ outlets: { 'poc-poc-clientes': 'poc-poc-clientes/ficha' } }], { skipLocationChange: true });
  }

  private filter(value: string) {
    if (!value.trim()) {
      if (this.list) {
        this.persons = this.list;
      }
      return;
    }
    if (!this.list) {
      return;
    }
    this.persons = this.list.filter(person => person.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
