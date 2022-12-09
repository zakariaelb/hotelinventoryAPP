import { AfterContentChecked, AfterViewInit, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DoCheck } from '@angular/core';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

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

  //@ViewChild(HeaderComponent, {static: true} ) headerComponent!: HeaderComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  ngOnInit(): void {
      //console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://images.unsplash.com',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.90,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://images.unsplash.com',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.99,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air conditioner, Free Wi-fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos: 'https://images.unsplash.com',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.09,
      },
    ]
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
      roomNumber: 4,
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
    this.roomList = [...this.roomList, room];
  }



}