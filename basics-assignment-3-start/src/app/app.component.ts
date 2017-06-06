import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = true;
  buttonClickLogs = [];
  
  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    //this.buttonClickLogs.push(this.buttonClickLogs.length);
    this.buttonClickLogs.push(new Date());
  }
}
