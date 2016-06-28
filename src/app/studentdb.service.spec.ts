import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { StudentdbService } from './studentdb.service';

describe('Studentdb Service', () => {
  beforeEachProviders(() => [StudentdbService]);

  it('should ...',
      inject([StudentdbService], (service: StudentdbService) => {
    expect(service).toBeTruthy();
  }));
});
