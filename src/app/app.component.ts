import { AfterViewInit, Component, ElementRef, Inject, inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';
import {LocalStorageToken} from'./localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';

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
  ){
     console.log(initServices.config);}

  ngOnInit(){

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