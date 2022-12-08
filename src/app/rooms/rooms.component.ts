import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'digiplus-app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'Hotel Hilton';
  numberOfRoom = '20';
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 15,
    boockedRooms: 5,
    totalRooms: 25
  }
  roomList: RoomList[] = [
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

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: RoomList) {
    //console.log(room);
    this.selectedRoom = room;
  }

}
