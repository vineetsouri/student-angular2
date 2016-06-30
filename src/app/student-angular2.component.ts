import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { StudentdbService } from '../app/studentdb.service';

@Component({
  moduleId: module.id,
  selector: 'student-angular2-app',
  templateUrl: 'student-angular2.component.html',
  styleUrls: ['student-angular2.component.css'],
  providers: [HTTP_PROVIDERS,StudentdbService]
})
export class StudentAngular2AppComponent {
  
  title = 'student-angular2 works!';
}
