import { Component, OnInit } from '@angular/core';
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

  constructor(private shareData: ShareDataService){}
  

  public addData(): void {
    this.shareData.updateShareData(Math.random()+'');
  }
  ngOnInit(): void {
     this.mSubject.subscribe(val=>console.log(val));
    // this.mSubject.next(1);
    // this.mSubject.next(2);
    // this.mSubject.complete();


    //this.obj.subscribe(val=>console.log(val));
  }


}
