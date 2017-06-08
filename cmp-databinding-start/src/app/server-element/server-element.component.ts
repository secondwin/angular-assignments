import { Component, OnInit, Input, ViewEncapsulation, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // is default so not required. Other options: None, Native.
  // None: No shadow DOM, so no style encapsulation
  // Emulated: No shadow DOM, but with emulated style encapsulation (good becuase not all browsers support showdow DOM)
  // Native: Shadow DOM for browsers that support it
})
export class ServerElementComponent implements OnInit {
  // The @Input decorator exposes the property to the world. Any parent will be able to bind to it
  // srvElement is an alias which is optional
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') heading: ElementRef
  // Access ng-content with ContentChild decorator
  @ContentChild('contentParagraph') paragraph: ElementRef;
  
  constructor() { }

  ngOnInit() {
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent)
    console.log('Text Content of heading: ' + this.heading.nativeElement.textContent)
  }
  
  ngAfterContentInit() {
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent)
  }
  
  ngAfterViewInit() {
    console.log('Text Content of heading: ' + this.heading.nativeElement.textContent)
  }

}
