import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'digiplus-app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit{

  empName = 'John';

  constructor(@Self() private roomsService: RoomsService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
