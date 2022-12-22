import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'digiplus-app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  constructor(private configService: ConfigService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.bookingForm = this.fb.group({

      // roomId: String,
      // guestEmail: String,
      // checkInDate: Date,
      // checkOutDate: Date,
      // bookingStatus: String,
      // bookingAmount: Number,
      // bookingDate: Date,
      // mobileNumber: Number,
      // guestName: String,
      // guestAddress: String,
      // guestCity: String,
      // guestState: String,
      // guestCountry: String,
      // guestZipCode: Number,
      // guestCount: Number,
      // guestList: Guest[],

      //this is a shortcut from this      roomId: new FormControl{''};
      //roomId: [''],
      roomId: new FormControl({value:"2", disabled: true })
      guestEmail: [''],
      checkInDate: [''],
      checkOutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      // guestAddress: [''],
      // guestCity: [''],
      // guestState: [''],
      // guestCountry: [''],
      // guestZipCode: [''],
      guestCount: [''],

      addree: this.fb.group({

        AddressLine1: [''],
        AddressLine2: [''],
        City: [''],
        State: [''],
        Country: [''],
        ZipCode: [''],

      }),
      //guestList: Guest[],

    })
  }


  addBooking(){

    console.log(this.bookingForm.getRawValue());

  }
}

// export class booking (){

//   roomId: String;
//   guestEmail: String;
//   checkInDate: Date;
//   checkOutDate: Date;
//   bookingStatus: String;
//   bookingAmount: Number;
//   bookingDate: Date;
//   mobileNumber: Number;
//   guestName: String;
//   guestAddress: String;
//   guestCity: String;
//   guestState: String;
//   guestCountry: String;
//   guestZipCode: Number;
//   guestCount: Number;
//   guestList: Guest[];
// }
