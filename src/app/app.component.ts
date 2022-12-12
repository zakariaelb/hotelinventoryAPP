import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { LoggerService } from './logger.service';
import { RoomsComponent } from './rooms/rooms.component';

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
  constructor(@Optional() private loggerService: LoggerService){

  }

  ngOnInit(){

  this.loggerService?.log('AppComponent.ngOnInit()');
  this.name.nativeElement.innerText ="Helton Helton Hotel";
  }

  
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRoom = 50;
  // }

}