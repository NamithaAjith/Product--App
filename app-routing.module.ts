import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
        {path: 'products', component: ProductListComponent},
        {path:'add',component:NewProductComponent },
        {path: '', redirectTo: '/login', pathMatch: 'full'},
        {path: 'login', component: LoginComponent},
        {path: 'signup' , component: SignUpComponent},
        {path: 'update/:productId', component: NewProductComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
