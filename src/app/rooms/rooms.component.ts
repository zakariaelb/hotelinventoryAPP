import { AfterContentChecked, AfterViewInit, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DoCheck } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'digiplus-app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterContentChecked {


  hotelName = 'Hotel Hilton';
  numberOfRoom = 20;
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 15,
    boockedRooms: 5,
    totalRooms: 25
  };

  title = 'room list 1';
  roomList: RoomList[] = [];

  stream = new Observable(observer => {
      observer.next('user 1');
      observer.next('user 2');
      observer.next('user 3');
      observer.complete();
      // observer.error("error");
  });

  //@ViewChild(HeaderComponent, {static: true} ) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  // not do that roomService = new RoomsService();

  constructor(private roomService: RoomsService){ }
  ngOnInit(): void {

    this.stream.subscribe({
        next: (value) => console.log(value),
        complete: () => console.log('Stream is completed ... '),
        error: (err) => console.log(err),
        
    }
      );
    this.stream.subscribe((data) => console.log(data));

    // console.log(this.roomService.getRooms());
    this.roomService.getRooms.subscribe(rooms =>{
      this.roomList = rooms;
    });
      //console.log(this.headerComponent);
    // this.roomList = [
    //   {
    //     roomNumber: 1,
    //     roomType: 'Deluxe Room',
    //     amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
    //     price: 500,
    //     photos: 'https://images.unsplash.com',
    //     checkinTime: new Date('11-Nov-2021'),
    //     checkoutTime: new Date('12-Nov-2021'),
    //     rating: 4.90,
    //   },
    //   {
    //     roomNumber: 2,
    //     roomType: 'Deluxe Room',
    //     amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
    //     price: 1000,
    //     photos: 'https://images.unsplash.com',
    //     checkinTime: new Date('11-Nov-2021'),
    //     checkoutTime: new Date('12-Nov-2021'),
    //     rating: 4.99,
    //   },
    //   {
    //     roomNumber: 3,
    //     roomType: 'Private Suite',
    //     amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
    //     price: 15000,
    //     photos: 'https://images.unsplash.com',
    //     checkinTime: new Date('11-Nov-2021'),
    //     checkoutTime: new Date('12-Nov-2021'),
    //     rating: 4.09,
    //   },
    // ];

    
    //get data from service instant of ts file
    this.roomList = this.roomService.getRooms();
  }
  ngDoCheck(): void {
    console.log('Do check is called ');
  }

  ngAfterViewInit(): void {
    //console.log(this.headerComponent);
    this.headerComponent.title = "Rooms View";
    console.log (this.headerChildrenComponent.last.title = "title of last .. ");
  }

  ngAfterContentChecked(): void {
    console.log('After View checked');
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "RoOm List";
  }
  selectRoom(room: RoomList) {
    //console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {

    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Private Suite',
      amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
      price: 5000,
      photos: 'https://images.unsplash.com',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.09,

    };
    // this.roomList.push(room); 
    //keep the existing data and add new record 
    // this.roomList = [...this.roomList, room];
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });

  }
  editRoom(){
    const room: RoomList =
{
  roomNumber: '3',
  roomType: 'Private Suite',
  amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
  price: 15000,
  photos: 'https://images.unsplash.com',
  checkinTime: new Date('11-Nov-2021'),
  checkoutTime: new Date('12-Nov-2021'),
  rating: 4.09,
    };
    this.roomService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  deleteRoom(){
    this.roomService.deleteRoom('3').subscribe((data) => {
      this.roomList = data;
    })
  }
}

// getDATA -> addData -> getDATA

// getDATA -> continuous stram of data -> addDATA