import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user-model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

private url: string = '';

constructor(private httpclient: HttpClient) {}

getUsers(): Observable<User[]>{
    return this.httpclient.get<User[]>(this.url);
}

}