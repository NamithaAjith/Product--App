import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

// title:String="Add Product";
//   constructor(private productService:ProductService,private router:Router) { }
//   productItem=new ProductModel(null,null,null,null,null,null,null,null);

//   ngOnInit(): void {
//   }
//   AddProduct()
//   {
//     this.productService.newProduct(this.productItem);
//     console.log("Called");
//     alert("success");
//     this.router.navigate(['/']);
//   }

// }

public mode = 'create';
private id: string;
title = '';
singleProduct: any;


constructor(private productService: ProductService, private router: Router, public activeRoute: ActivatedRoute) { }
productItem: any;
ngOnInit(): void {

  this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
    if (paramMap.has('productId')) {
      this. mode = 'update';
      this. id = paramMap.get('productId');
      this.title = 'Update Product';
      this.productService.editProduct(this.id).subscribe(product => {
        this.singleProduct = JSON.parse(JSON.stringify(product)) ;
        console.log(this.singleProduct);
        const {
          productId,
          productName,
          productCode,
          releaseDate,
          description,
          price,
          starRating,
          imageUrl  } = this.singleProduct.product;
        this.productItem = new ProductModel(productId, productName, productCode, releaseDate, description, price, starRating, imageUrl);
      });

}
else {
this.mode = 'create';
this. id = null;
this.title = 'Create Product';
this.productItem = new ProductModel(null, null, null, null, null, null, null, null);
}
});
}

AddProduct(){
  if (this.mode === 'create'){
  this.productService.newProduct(this.productItem);
  alert('Success');
  this.router.navigate(['/products']);
}
else if (this.mode === 'update'){
  this.updateProduct();
}
}

updateProduct(){
this.productService.updateProduct(this.productItem, this.id);
alert('Updated');
this.router.navigate(['/products']);
}


}