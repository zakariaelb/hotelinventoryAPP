import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'digiplus-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

title: string ='';
  
  ngOnInit(): void {}
}
