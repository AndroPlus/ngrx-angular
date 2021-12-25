import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export class HttpErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).
        pipe(retry(1), catchError((error: HttpErrorResponse)=>{
            if(error.error == ErrorEvent)
            return throwError('client side error')
            else 
            return throwError('Server side error')
        }));
    }

}