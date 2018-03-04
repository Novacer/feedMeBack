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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

}
