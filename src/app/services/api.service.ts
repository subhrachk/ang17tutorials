import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { optionType } from '../../types';

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

}
