import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor() { }
  Login(email: string, password: string) {
    if (email === 'admin@gmail.com' && password === 'Admin') {
      // alert("Login Successful ...");
      //route service
      // this.route.navigate('/rooms', 'add');
      //or 
      // this.route.navigateByUrl('/rooms/add');
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if(email === 'user@gmail.com' && password === 'User'){
      this.isLoggedIn = true;
      this.isAdmin = false;
    }
    return this.isLoggedIn;
  }
}
