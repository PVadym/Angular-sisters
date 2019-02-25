import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../product';
import {ActionEvent} from '../action-event';
import {EventType} from '../event-type.enum';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;
  data: FormData;

  public selectedProduct: Product;

  constructor(private productService: ProductService,
              private logger: LoggerService) { }

  ngOnInit() {
    this.selectedProduct = new Product();
    this.fetchData();
  }

  private fetchData() {
    this.productService.getAllProducts().subscribe(p => {
      this.products = p.data;
      console.log(this.products);
    });
  }

  onDelete(id: any) {
  console.log(id);
  this.productService.deleteProduct(id)
    .subscribe( p =>   this.fetchData());
  this.selectedProduct = new Product();

  }

  onSelect(p: Product) {
    console.log(this.selectedProduct);
    this.selectedProduct = p;
  }

  onSave() {
    if (this.selectedProduct != null) {
      console.log(this.selectedProduct);
      console.log(this.data.get('file'));
      this.data.append('product', JSON.stringify(this.selectedProduct));
      this.productService.saveOrUpdateProduct(this.selectedProduct, this.data)
        .subscribe(p => {
          this.fetchData();
        });

    }
  }

  isEnabled() {
    return !(this.selectedProduct.name && this.selectedProduct.price && this.selectedProduct.size);
  }

  fileChange(event) {
    const file = event.target.files[0];
    console.log(file.name);
    const filename = file.name;
    const type = filename.split('.').pop();
    if (type !== 'img' && type !== 'ico' && type !== 'jpeg' && type !== 'png') {
      return;
    }
    this.data = new FormData();
    this.data.append('file', file);
    console.log('appended');
  }

  onAction(event: ActionEvent) {
    this.logger.log('On action :' + this.constructor.name);
    this.logger.log(event);
    switch (event.type) {
      case EventType.DELETE:
        this.onDelete(event.argument);
        break;
    }
  }
}
