import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-components/product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {ProductService} from './services/product.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ArraySortPipe} from './pipes/ArraySortPipe';
import { ProductDetailsComponent } from './product/product-components/product-details/product-details.component';
import { ProductViewComponent } from './product/product-components/product-view/product-view.component';
import { CardhoverDirective } from './product/cardhover.directive';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { ProductCreateComponent } from './product/product-components/product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ArraySortPipe,
    ProductDetailsComponent,
    ProductViewComponent,
    CardhoverDirective,
    PageNotFoundComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
