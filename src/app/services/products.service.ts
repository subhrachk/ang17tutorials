import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ProductsType, optionsType } from '../../types';
import { Observable } from 'rxjs';

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
}
