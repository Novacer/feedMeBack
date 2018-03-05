import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  user: any;

  constructor(private http: Http) {

  }

  // registerUser(Object) registers the new user to mongodb
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("https://feed-me-back.herokuapp.com:443/users/register", user, {headers: headers})
      .map(resp => resp.json());
  }

  // loginUser(Object) authenticates that user's email and password are in mongodb
  loginUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post("https://feed-me-back.herokuapp.com:443/users/login", user, {headers: headers})
      .map(resp => resp.json());
  }

  // updateFeedback(string, Object) finds the user with email and appends the new feedback to
  //   the user's feedback array
  updateFeedback(email, feedback) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {email: email, feedback: feedback};

    return this.http.post("https://feed-me-back.herokuapp.com:443/users/feedback", body, {headers: headers})
      .map(resp => resp.json());

  }

  // loggedIn() returns true if there exists a user in the localStorage, false otherwise.
  loggedIn() {
    let user = localStorage.getItem('user');

    if (user != null) {
      return true;
    }
    else {
      return false;
    }
  }

  // logout() clears the local storage
  logout() {
    localStorage.clear();
  }
}
