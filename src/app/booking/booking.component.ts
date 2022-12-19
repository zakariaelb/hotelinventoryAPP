import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'digiplus-app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  constructor(private configService: ConfigService){
  }

}
