/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgServicesService } from './ag-services.service';

describe('Service: AgServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgServicesService]
    });
  });

  it('should ...', inject([AgServicesService], (service: AgServicesService) => {
    expect(service).toBeTruthy();
  }));
});
