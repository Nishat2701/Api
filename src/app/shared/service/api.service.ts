import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { EndPoint } from 'src/app/shared/Endpoint/EndPoints';
import { environment } from 'src/environments/environment';
import { IUser } from '../Interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // import from environment file
  REST_API = environment.REST_API;
  //http header
  HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}

  //get all Users
  GetUsers(): Observable<any> {
    return this.httpClient.get(`${this.REST_API}${EndPoint.Users}`);
  }
  //get single User
  GetUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}${EndPoint.Users}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.HttpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  //add User
  AddUser(data: IUser): Observable<any> {
    return this.httpClient
      .post(`${this.REST_API}${EndPoint.Users}`, data)
      .pipe(catchError(this.handleError));
  }

  //update User
  updateUser(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}${EndPoint.Users}/${id}`;
    return this.httpClient
      .patch(API_URL, data, { headers: this.HttpHeaders })
      .pipe(catchError(this.handleError));
  }

  // Delete User
  deleteUser(id: any): Observable<any> {
    let API_URL = `${this.REST_API}${EndPoint.Users}/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.HttpHeaders })
      .pipe(catchError(this.handleError));
  }

  //error handling
  handleError(error: HttpErrorResponse) {
    //Handle server error
    let errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;

    window.alert(errorMessage);
    // console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
