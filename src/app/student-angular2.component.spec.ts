import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { StudentAngular2AppComponent } from '../app/student-angular2.component';

beforeEachProviders(() => [StudentAngular2AppComponent]);

describe('App: StudentAngular2', () => {
  it('should create the app',
      inject([StudentAngular2AppComponent], (app: StudentAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'student-angular2 works!\'',
      inject([StudentAngular2AppComponent], (app: StudentAngular2AppComponent) => {
    expect(app.title).toEqual('student-angular2 works!');
  }));
});
