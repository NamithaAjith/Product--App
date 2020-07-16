import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ProductModel } from './product-list/product.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  id: String;
  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get(`http://localhost:3000/products`);
  }
  newProduct(item){
    return this.http.post(`http://localhost:3000/products/insert`, {'product': item})
    .subscribe(data => {
      console.log(data);
    });
  }

  deleteProduct(id) {
    return this.http.post(`http://localhost:3000/products/delete`, {id: id});

  }
  editProduct(id) {
    return this.http.get<any>(`http://localhost:3000/products/edit/${id}`);
  }

  updateProduct(item, id){
    return this.http.put(`http://localhost:3000/products/update`, {'product': item, 'id': id })
    .subscribe((data) => {console.log('updated product:', data );
  }
    );
  }



}
