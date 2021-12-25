import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ShareDataService {
    shareSubscription = new Subject<string>();

    
   obj = new Observable(observer=>{
    observer.next(1);
    observer.next(2);
    observer.complete();
  });

public getObservableShareData(): Observable<unknown>{
    return this.obj;
}

    public updateShareData(data: string) {
        this.shareSubscription.next(data);
    }

    public getShareData(): Observable<string>{
        return this.shareSubscription.asObservable();
    }
}