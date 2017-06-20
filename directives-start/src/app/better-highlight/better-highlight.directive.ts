import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // If we use HostBinding we don't need to use ElementRef or Renderer2
  // We can bind to any property of the element this directive is sitting on
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  
  // constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  constructor() { }
  
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  
  @HostListener('mouseenter') mouseover(eventData:Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }
  
  @HostListener('mouseleave') mouseleave(eventData:Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
