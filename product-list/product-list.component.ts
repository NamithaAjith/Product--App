import { Component, OnInit } from '@angular/core';
import { ProductModel} from './product.model'
import  { ProductService} from '../product.service'
import {Router} from '@angular/router'
  import { from } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title:String = "Product List";
  // product is the model class for a product item
  products: ProductModel[];
  // image properties
  imageWidth : number = 50;
  imageMargin : number = 2;
  showImage: boolean =false;
  // creating service object for calling getProducts()

  constructor( private productService: ProductService) { }
  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe((data)=>{
  //     this.products = JSON.parse(JSON.stringify(data));
  //   })
  // }
  toggleImage(): void{
    this.showImage = !this.showImage;
  }
  ngOnInit(){
    this.getProducts();
  }
  getProducts()
  {
    this.productService.getProducts().subscribe((data) => {
      this.products = JSON.parse(JSON.stringify(data));
    });

  }

  deleteClick(id){
    this.productService.deleteProduct(id)
    .subscribe((result) => {
      console.log(result);
      if (JSON.parse(JSON.stringify(result)).Status=="Done" ){
        this.getProducts();
      }
      else{
        alert('error occur');
      }
    });
  }


}
