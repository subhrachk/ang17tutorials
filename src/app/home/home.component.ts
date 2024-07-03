import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ProductType, ProductsType } from '../../types';
import { ProductComponent } from '../componenets/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

constructor(private prodService : ProductsService) {}

  products : ProductType[] = [];
  totalRecords: number = 0;
  rows: number = 12;

  onPageChange(e : any) {
    this.fetchProducts(e.page,e.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.prodService
      .getAllProduct('http://localhost:3000/clothes', { page, perPage })
      .subscribe({
        next: (data : ProductsType) => {
          this.products = data.items;
          this.totalRecords = data.total;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnInit(): void {
    this.fetchProducts(0,5);
  }

  onProductOutput(product : ProductType) {
    console.log(product);
  }

}
