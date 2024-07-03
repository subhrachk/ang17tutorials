import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsType, optionsType } from '../../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private api : ApiService) { }

  getAllProduct = (url : string, params : optionsType) : Observable<ProductsType> => {
    return this.api.get(url, {
      params,
      responseType: 'json'
    });
  }

  // Adding a product via the API
  addProduct = (url: string, body: any): Observable<any> => {
    return this.api.post(url, body, {});
  };

  // Editing a product via the API
  editProduct = (url: string, body: any): Observable<any> => {
    return this.api.put(url, body, {});
  };

  // Deleting a product via the API
  deleteProduct = (url: string): Observable<any> => {
    return this.api.delete(url, {});
  };
}
