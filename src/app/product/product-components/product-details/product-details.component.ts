import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../../environments/environment.local';
import {ActionEvent} from '../action-event';
import {EventType} from '../event-type.enum';
import {LoggerService} from '../../../services/logger.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: any;
  @Output () emitter = new EventEmitter<ActionEvent>();

  private imagePath: string;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.imagePath = environment.api + '/img/';
  }

  onDelete(event: Event, id: any) {
    this.logger.log('ID to delete =' + id);
    this.emitter.emit(new ActionEvent(EventType.DELETE, id, event));
  }
}
