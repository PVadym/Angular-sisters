import {Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-error-section',
  templateUrl: './error-section.component.html',
  styleUrls: ['./error-section.component.css']
})
export class ErrorSectionComponent implements OnInit {

  @Input() error: HttpErrorResponse;
  constructor() { }

  ngOnInit() {
  }

}
