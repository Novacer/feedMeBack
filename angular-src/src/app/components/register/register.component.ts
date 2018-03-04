import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  companyName: string;
  email: string;
  password: string;
  products: string[];
  feedback: any[];
  user: User;

  registerFail: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.products = [];
    this.feedback = [];
    this.registerFail = false;
 }


  ngOnInit() {
  }

  onRegisterSubmit() {
    if (this.companyName == undefined || this.email == undefined || this.password == undefined) {
      this.registerFail = true;
    }

    else {
      this.user = {
        companyName: this.companyName,
        email: this.email,
        password: this.password,
        products: this.products,
        feedback: this.feedback
      };

      this.authService.registerUser(this.user).subscribe(data => {
        if (data.success) {
          this.registerFail = true;

          this.router.navigateByUrl("login");
        }
        else {
          this.registerFail = false;
        }
      });
    }
  }
}

interface User {
  companyName: string;
  email: string;
  password: string;
  products: string[];
  feedback: any[];
}
