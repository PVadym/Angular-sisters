import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductListComponent} from './product/product-components/product-list/product-list.component';
import {ProductViewComponent} from './product/product-components/product-view/product-view.component';
import {PageNotFoundComponent} from './home/page-not-found/page-not-found.component';
import {ProductCreateComponent} from './product/product-components/product-create/product-create.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products',  canActivate: [AuthGuard], component: ProductListComponent},
  {path: 'products/:id', component: ProductViewComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'login',  component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
