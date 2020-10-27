import { TestBed } from '@angular/core/testing';

import { PrintingEditionService } from './printing-edition.service';

describe('PrintingEditionService', () => {
  let service: PrintingEditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintingEditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
