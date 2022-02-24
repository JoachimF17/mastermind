import { Component, Input, OnInit } from '@angular/core';
import { Guess } from 'src/app/models/guess.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  @Input('getGuesses')
  guesses: Guess[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
