import { TestBed } from '@angular/core/testing';

import { PocClientesService } from './poc-clientes.service';

describe('PocClientesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PocClientesService = TestBed.get(PocClientesService);
    expect(service).toBeTruthy();
  });
});
