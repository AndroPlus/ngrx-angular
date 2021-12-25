import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { AppRouting } from './app.routing';
import { ManagerComponent } from './manager/manager.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(AppRouting.routes), 
    StoreModule.forRoot(reducers, { metaReducers }), 
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CustomerModule
  ],
  exports:[RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass : HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
