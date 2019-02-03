import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightTitle]'
})
export class HighlightTitleDirective {

  @Input('appHighlightTitle') highlightTitle: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeTitleColor(this.highlightTitle);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeTitleColor(null);
  }

  changeTitleColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
