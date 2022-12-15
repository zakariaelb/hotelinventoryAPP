import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'digiplus-app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {

  id: number = 0;
  // id$ !: Observable<number>;
  // id$ = this.router.params.pipe(
  //   map(params => params['id'])
  //      );
  //multiple values 
  id$ = this.router.paramMap.pipe(map((params) => params.get('id') ));

constructor(private router: ActivatedRoute){

}

ngOnInit(): void {
  //throw new Error('Method not implemented.');
  // this.router.params.subscribe((params) => {console.log(params);});
  //should not subscribe
  //this.router.params.subscribe((params) => {params['id']});
  //do this
  //this.id =  this.router.snapshot.params['id'];
  // this.id$ = this.router.params.pipe(
  //   map(params => params['id'])
  //   )
    // this.router.paramMap.subscribe((params) => { params.get('id');});

}

}
