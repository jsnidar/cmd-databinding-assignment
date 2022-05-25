import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  @Output() intervalFired  = new EventEmitter<number>();
  interval;
  time : number = 0

  
  constructor() { }

  ngOnInit(): void {
  }

  startInterval(){
    this.interval = setInterval(() =>{
      this.intervalFired.emit(++this.time)}, 1000)
  }

  stopGame = () => clearInterval(this.interval)
  
}
