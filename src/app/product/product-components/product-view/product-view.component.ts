import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product';
import {LoggerService} from '../../../services/logger.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {


  productId: any;
  product: Product;
  linkToCopy: string;


  constructor(private logger: LoggerService,
              private productService: ProductService,
              private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe( (p: ParamMap) => {
      this.productId = p.get('id');
    });
    this.productService.getProductById(this.productId).subscribe(p => {
      this.logger.log(p.data);
      this.product = p.data;
    });
    this.linkToCopy = window.location.origin + `/products/${this.productId}`;
  }

  copyToClipboard(element) {
    element.select();
    document.execCommand('copy');
    this.logger.log('Link copied to clipboard!');
  }

}
