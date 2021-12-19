import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: User | null = null;
  private isAdminFlag = false;
  constructor(private http: HttpClient, private router: Router) { }


  login(reqBody: User) {

    if(this.isAdmin(reqBody)) {
      this.isAdminFlag = true;
    }
    this.saveUser({...reqBody, isAdmin: this.isAdminFlag});
    console.log(this.isAdminFlag);
    this.router.navigateByUrl('home');

    // this.http.post('login_api', reqBody).subscribe(function (response) {
    //   console.log(response);
    // });
  }

  logout() {
    this.user = null;
    this.isAdminFlag = false;
    this.router.navigateByUrl('login');
  }

  isAdmin(user: User): boolean {
    if(user?.username === 'admin' && user?.password === 'admin') {
      console.log("admin true")
      return true;
    }
    else {
      return false;
    }
  }

  saveUser(user: User) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

}

interface User {
  username: string;
  password: string;
  isAdmin?: boolean;
}
