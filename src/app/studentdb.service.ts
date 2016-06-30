import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class StudentdbService {

  constructor(private http:Http) {};

  private klassUrl: 'https://pure-retreat-73401.herokuapp.com/api/v1/klasses.json?access_token=TLVMLZCHEBSBAVTQJDV5LVTB7E8S74Q4';
  getKlasses (): Observable<Response> {
    console.log("this.http.get(this.klassUrl)");
    return this.http.get(this.klassUrl);
    // .map(this.extractData).catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.klasses || [ ];
  }
}

let p = new StudentdbService();
p.getKlasses();
console.log("StudentdbService.klassUrl");
