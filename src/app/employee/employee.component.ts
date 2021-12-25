import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../services/share-data-service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.shareData.getShareData().subscribe(val=>console.log("Employee..", val));

    this.shareData.getObservableShareData().subscribe(val=>console.log("EmployeeComponent observable", val));
  }

}
