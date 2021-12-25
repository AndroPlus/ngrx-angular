import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";

export class AppRouting {

    static routes: Routes =[
        {path:'employee', component: EmployeeComponent}
    ];

}