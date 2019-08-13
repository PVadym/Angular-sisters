import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  private isShowBrandForm = false;
  brands = [{newBrandName: 'One', newBrandCountry: 'UK'}, {newBrandName: 'Two', newBrandCountry: 'USA'}];
  choosenBrand = this.brands[0];

  constructor(private logger: LoggerService) { }

  ngOnInit() {
  }

  onSubmit(product: any) {
    this.logger.log(product);
  }

  onShowBrandForm(){
    this.isShowBrandForm = true;
  }

  onSubmitBrand(brand: any) {
    this.logger.log(brand);
    this.brands.push(brand);
    this.isShowBrandForm = false;

  }

  onBrandChange(brandId: number) {
    this.logger.log(brandId);
    this.choosenBrand = this.brands[brandId];

  }
}
