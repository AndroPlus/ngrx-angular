import { Component, OnInit } from '@angular/core';
import { DateUtilsService } from '@rameshd33/ang-lib';
import { Observable, Subject } from 'rxjs';
import { ShareDataService } from './services/share-data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Ramesh is title';
  mSubject = new Subject()

  constructor(private shareData: ShareDataService, private dateLib: DateUtilsService){}
  

  public addData(): void {
    this.shareData.updateShareData(Math.random()+'');
  }
  ngOnInit(): void {
    this.title = ''+this.dateLib.isValidDate('01/11/2003'); // using @rameshd33/ang-lib
     this.mSubject.subscribe(val=>console.log(val));
    // this.mSubject.next(1);
    // this.mSubject.next(2);
    // this.mSubject.complete();


    //this.obj.subscribe(val=>console.log(val));
  }


}
