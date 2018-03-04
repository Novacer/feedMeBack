import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  user: User;
  loginFail: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.email = "";
    this.password = "";
    this.loginFail = false;
 }

  ngOnInit() {
  }

  onLoginSubmit() {
    if (this.email == "" || this.password == "" || this.email == undefined || this.password == undefined) {
      this.loginFail = true;
    }

    else {
      this.user = {email: this.email, password: this.password};

      this.authService.loginUser(this.user).subscribe(data => {
        if (data.success) {
          let response_user = data.user;
          this.loginFail = false;
          localStorage.clear();
          localStorage.setItem("user", JSON.stringify(response_user));

          this.router.navigateByUrl('');
        }
        else {
          this.loginFail = true;
        }
      });
    }
  }
}

interface User {
  email: string;
  password: string;
}
