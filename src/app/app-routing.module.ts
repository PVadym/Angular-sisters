import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './product/product-components/product-list/product-list.component';
import {ProductViewComponent} from './product/product-components/product-view/product-view.component';
import {PageNotFoundComponent} from './home/page-not-found/page-not-found.component';
import {ProductService} from "./services/product.service";
import {ProductCreateComponent} from "./product/product-components/product-create/product-create.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductViewComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
