import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocClientesComponent } from './poc-clientes.component';

describe('PocClientesComponent', () => {
  let component: PocClientesComponent;
  let fixture: ComponentFixture<PocClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
