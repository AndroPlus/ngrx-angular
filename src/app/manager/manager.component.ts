import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareDataService } from '../services/share-data-service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  @Input()
  source: Observable<any> | undefined;
  constructor(private shareData: ShareDataService) { }

  ngOnInit(): void {
    this.shareData.getShareData().subscribe(val=>console.log("manager:",val));
    this.shareData.getObservableShareData().subscribe(val=>console.log("ManagerComponent observable", val));
    this.source?.subscribe(val=>console.log("manager:", val));
  }

}
