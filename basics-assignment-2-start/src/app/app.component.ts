import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Defining this is not necessary if we do inline model assignment in the TS file.
  // Although both solutions will work.
  // username = "";
  // 
  // onClearUsername() {
  //   this.username = "";
  // }
}


