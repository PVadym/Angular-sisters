import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCardhover]'
})
export class CardhoverDirective {

  constructor() { }

  @HostBinding ('class.card-hovered') isHovered = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHovered = false;
  }
}
