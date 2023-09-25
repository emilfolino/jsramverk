import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() squares: Array<number>;
  @Output() gotClicked = new EventEmitter<number>();

  constructor() {
    this.squares = [];
  }

  ngOnInit() {
  }

  onClicked(click: boolean, index: number) {
    this.gotClicked.emit(index);
  }
}
