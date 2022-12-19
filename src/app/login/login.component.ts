import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'digiplus-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  email: string ='';
  password: string ='';
constructor(private route: Router){}
  ngOnInit(): void {}
    // throw new Error('Method not implemented.');
    Login() {
      if(this.email ==="admin@gmail.com" && this.password ==="Admin"){
        // alert("Login Successful ...");
        //route service
        // this.route.navigate('/rooms', 'add');
        //or 
        this.route.navigateByUrl('/rooms/add'); 

      }
    }
  }

