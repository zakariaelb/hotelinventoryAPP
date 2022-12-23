import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'digiplus-app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;
  //getter prop'

  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }

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
      roomId: new FormControl({value:"2", disabled: true}, {validators: [Validators.required]}),
      guestEmail: ['', [Validators.required, Validators.email]],
      checkInDate: [''],
      checkOutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['', [Validators.required, Validators.minLength(3)]],
      // guestAddress: [''],
      // guestCity: [''],
      // guestState: [''],
      // guestCountry: [''],
      // guestZipCode: [''],
      //guestCount: [''],

      addree: this.fb.group({

        AddressLine1: [''],
        AddressLine2: [''],
        City: [''],
        State: [''],
        Country: [''],
        ZipCode: [''],

      }),
      //guestList: Guest[],
      Guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false, {validators: [Validators.required]}),
        // this.fb.group({
        //   guestName: [''],
        //   age: new FormControl(''),
        // })
    })
  }


  addBooking(){

    console.log(this.bookingForm.getRawValue());

  }

  addGuest(){
      this.guests.push(this.addGuestControl());

        // this.fb.group({
        //   guestName: [''],
        //   age: new FormControl(''),
        // })
        //instend
        
  }

  addGuestControl(){

    return this.fb.group({guestName: [''], age: new FormControl(''),})
  }

  addPassport(){
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport(){
    if(this.bookingForm.get('passport')){
          this.bookingForm.removeControl('passport');
    };
  }

  removeGuest(i: number){

    this.guests.removeAt(i);
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
