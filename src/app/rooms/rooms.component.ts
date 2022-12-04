import { Component } from '@angular/core';

@Component({
  selector: 'digiplus-app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = 'Hotel Hilton';
  numberOfRoom ='20';
  hideRooms = false;

  
  toggle() {
    this.hideRooms = !this.hideRooms;   
    }

}
