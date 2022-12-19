import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'digiplus-app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  }
  successMessage: string = '';
  constructor(private roomService: RoomsService) { }

  ngOnInit(): void {}

    // addRoom() {
    //   this.roomService
    //   .addRoom(this.room)
    //   .subscribe((data) =>
    //   this.successMessage = (this.successMessage = 'Room Added'));

    // }
// 1st method to reset after submit
    addRoom(roomsForm: NgForm) {
      this.roomService
      .addRoom(this.room)
      .subscribe((data) => {
          this.successMessage = 'Room Added'
          roomsForm.reset
      }
      );
      
//Sd method to reset after submit

addRoom(roomsForm: NgForm) {
  this.roomService
  .addRoom(this.room)
  .subscribe((data) => {
      this.successMessage = 'Room Added'
      roomsForm.resetForm({
        roomType: '',
        amenities: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        photos: '',
        price: 0,
        rating: 0,
      })
  }
  );

    }
  }

}
