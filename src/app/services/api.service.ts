import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType, optionType } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  // get<T>(page : number = 0, perpage : number=0) {
  //   return this.http.get<T>(`http://localhost:3000/clothes?page=${page}&perPage=${perpage}`);
  // }

  get<T>(url : string,options : optionType) : Observable<T> {
    return this.http.get<T>(url,options) as Observable<T>;
  }

  // Used to make a POST request to the API
  post<T>(url: string, body: ProductType, options: optionType): Observable<T> {
    return this.http.post<T>(url, body, options) as Observable<T>;
  }

  // Used to make a PUT request to the API
  put<T>(url: string, body: ProductType, options: optionType): Observable<T> {
    return this.http.put<T>(url, body, options) as Observable<T>;
  }

  // Used to make a DELETE request to the API
  delete<T>(url: string, options: optionType): Observable<T> {
    return this.http.delete<T>(url, options) as Observable<T>;
  }

}
