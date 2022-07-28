import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Auth, getAuth } from 'firebase/auth';
import { googleAuth } from '../services/googleAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: any;
  auth = getAuth();
  constructor(private _fService: googleAuth, private _route: Router) {}
  ngOnInit(): void {
    this.user = this._fService.user;
  }
  async onGoogle() {
    await this._fService.signInWithGoogle();
    // window.location.reload();
    this._route.navigate(['/Photos'])

  
  }
  onOut() {
    this._fService.signOutt();
    window.location.reload();
    // console.warn('logged Out');
    // this.user != this._fService.user
  }
}
