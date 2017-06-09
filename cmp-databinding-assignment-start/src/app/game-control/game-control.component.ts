import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() gameStarted = new EventEmitter<number>();
  count: number = 0;
  
  constructor() { }

  ngOnInit() {
  }
  
  onStartGame() {
    this.interval = setInterval(() => {
      this.gameStarted.emit(this.count + 1);
      this.count++;
    }, 1000);
  }
  
  onStopGame() {
    clearInterval(this.interval);
  }

}
