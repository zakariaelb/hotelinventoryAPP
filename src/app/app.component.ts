import { AfterViewInit, Component, ElementRef, Inject, inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import {LocalStorageToken} from'./localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'digiplus-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// export class AppComponent implements AfterViewInit {

export class AppComponent implements OnInit {

  title = 'hotelinventoryAPP';
  role = 'Admin';

  @ViewChild('name', {static: true}) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService, @Inject(LocalStorageToken) 
  private localStorage: Storage,
  private initServices: InitService,
  private configService: ConfigService,
  private router: Router,
  ){
     console.log(initServices.config);}

  ngOnInit(){

  // this.router.events.subscribe((event) => {console.log(event)});
  this.router.events.pipe(
    filter((event) => event instanceof NavigationStart)
  ).subscribe((event) => {
    console.log('Navigations started ...');
  });

  this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd)
  ).subscribe((event) => {
    console.log('Navigations Ended ...');
  });
  
  this.loggerService?.log('AppComponent.ngOnInit()');
  this.name.nativeElement.innerText ="Helton Helton Hotel";
  this.localStorage.setItem('name', 'AccorHotel');
  }

  
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRoom = 50;
  // }

}