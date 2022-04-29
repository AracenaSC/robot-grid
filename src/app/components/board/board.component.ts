import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  grid = document.querySelector('.grid')
  
  constructor() { }

  ngOnInit(): void {
  }
  public wall(){
    const box = document.getElementsByClassName('box')
    // box.classList.
  }
  public run(){

  }
  public move() {
    // Start at 0,0
    // try to move right
    // try to move down
    // If stuck, game over
    // If goal, win
  }
}
