import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'digiplus-app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  providers: [RoomsService]
})
export class ContainerComponent implements OnInit, AfterContentInit {

  @ContentChild(EmployeeComponent) employee! :EmployeeComponent;

  constructor(@Host() private roomService: RoomsService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }  
  
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
    console.log(this.employee);
    this.employee.empName = "Patrick";
  }


}
