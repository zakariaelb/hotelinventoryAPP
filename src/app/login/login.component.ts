import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'digiplus-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email: string ='';
  password: string ='';
constructor(private route: Router, private loginService: LoginService){}
  ngOnInit(): void {}
    // throw new Error('Method not implemented.');
    Login() {
      if(this.loginService.login(this.email, this.password)){
        // alert("Login Successful ...");
        //route service
        // this.route.navigate('/rooms', 'add');
        //or 
        this.route.navigateByUrl('/rooms'); 

      }
    }
  }

