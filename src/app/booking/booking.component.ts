import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { BookingService } from './booking.service';


@Component({
  selector: 'digiplus-app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;
  //getter prop'

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private bookingService: BookingService,  private configService: ConfigService,
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
      roomId: new FormControl({ value: "2", disabled: true }, { validators: [Validators.required] }),
      // guestEmail: ['', [Validators.required, Validators.email]],
      guestEmail: ['', {
        updateOn: 'blur',
        Validators: [Validators.required, Validators.email]
      }],
      checkInDate: [''],
      checkOutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['',
      {
        updateOn: 'blur',
      }
    ],
      guestName: ['', [Validators.required, Validators.minLength(3)]],
      // guestAddress: [''],
      // guestCity: [''],
      // guestState: [''],
      // guestCountry: [''],
      // guestZipCode: [''],
      //guestCount: [''],

      addree: this.fb.group({

        AddressLine1: ['', { validators: [Validators.required] }],
        AddressLine2: [''],
        City: ['', { validators: [Validators.required] }],
        State: ['', { validators: [Validators.required] }],
        Country: [''],
        ZipCode: [''],

      }),
      //guestList: Guest[],
      Guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] },),
      // this.fb.group({
      //   guestName: [''],
      //   age: new FormControl(''),
      // })
    },
    {
      updateOn: 'blur',
    })

    this.getBookingData();
    // this.bookingForm.valueChanges.subscribe((data) => {
    //   // console.log(data);
    //   this.bookingService.bookRoom(data).subscribe((data) => {})
    // });

    // RxJS operators mergeMap vs switchMap vs exhaustMap

    // this.bookingForm.valueChanges.pipe(
    //   mergeMap((data) => this.bookingService.bookRoom(data))
    // ).subscribe((data) => console.log(data));
    // this.bookingForm.valueChanges.pipe(
    //   switchMap((data) => this.bookingService.bookRoom(data))
    // ).subscribe((data) => console.log(data));

    //best 

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data) => this.bookingService.bookRoom(data))
    ).subscribe((data) => console.log(data));
  }


  addBooking() {

    console.log(this.bookingForm.getRawValue());
    this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => {
      console.log(data);      
    });
     this.bookingForm.reset({
       roomId: '',
       guestEmail: '',
       checkInDate: '',
       checkOutDate: '',
       bookingStatus: '',
       bookingAmount: '',
       bookingDate: '',
       mobileNumber: '',
       guestName: '',
       addree: {

         AddressLine1: '',
         AddressLine2: '',
         City: '',
         State: '',
         Country: '',
         ZipCode: '',
       },
       Guests: [],
       tnc: false,


     })

  }
  //get data from API example

  getBookingData() {
    // this.bookingForm.setValue({
    this.bookingForm.patchValue({
      // setPatch not requied all the values setValye neeed to povide all the vallue
      roomId: '3',
      guestEmail: 'test@test.com',
      checkInDate: '',
      checkOutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      addree: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      Guests: [],
      tnc: false,



    })
  }
  addGuest() {
    this.guests.push(this.addGuestControl());

    // this.fb.group({
    //   guestName: [''],
    //   age: new FormControl(''),
    // })
    //instend

  }

  addGuestControl() {

    return this.fb.group({ guestName: ['', { Validators: [Validators.required] }], age: new FormControl(''), })
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    };
  }

  removeGuest(i: number) {

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
