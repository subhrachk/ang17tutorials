import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductType } from '../../../types';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    RatingModule,
    FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
@Input() product! : ProductType;
@Output() productOutput : EventEmitter<ProductType> = new EventEmitter<ProductType>() ;


ngOnInit(): void {
  this.productOutput.emit(this.product);
}

}
