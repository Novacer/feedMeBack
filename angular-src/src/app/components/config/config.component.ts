import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  user: any;
  image_link: string;
  show_qr: boolean

  constructor(private router: Router, private authService: AuthService) {
    this.show_qr = false;
 }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    var email = this.user.email;

    this.image_link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + "Subway Customer Feedback Survey";
  }

  onGenerateClick() {
    this.show_qr = true;
  }

}
