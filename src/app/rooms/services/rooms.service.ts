import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {environment} from'../../../environments/environments';
import { APP_SERVICE_CONFIG} from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
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
  ];

  // constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) { 

    constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) { 
    // console.log(environment.apiEndpoint);
    console.log(this.config.apiEndpoint);
    console.log("Room Service is initialized ... ");
  }

  getRooms() {
    return this.roomList;
  }
}
