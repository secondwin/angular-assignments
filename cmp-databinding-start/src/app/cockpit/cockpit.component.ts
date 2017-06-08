import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Output decorator indicates that this property will transmit information 
  // Aliasing is also optional here
  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  // Use ViewChild decorator in order to view DOM elements. Should be typed correctly as an ElementRef.
  // This seems weird as we can simply use a property bind to accomplish the same thing.
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }
  
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // Local references are of type HTMLInputElement and has a .value property to get the value
      serverName: nameInput.value, 
      // The ElementRef from the ViewChild has a .nativeElement property which give you
      // an HTMLInputElement, which has a .value property to get the value
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
  
