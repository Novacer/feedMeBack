import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  user: any;

  constructor(private http: Http) {

  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://localhost:8080/users/register", user, {headers: headers})
      .map(resp => resp.json());
  }

  loginUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post("http://localhost:8080/users/login", user, {headers: headers})
      .map(resp => resp.json());
  }

  updateFeedback(email, feedback) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {email: email, feedback: feedback};

    return this.http.post("http://localhost:8080/users/feedback", body, {headers: headers})
      .map(resp => resp.json());

  }
}
