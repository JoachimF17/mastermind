import { Component, OnInit } from '@angular/core';
import { Guess } from 'src/app/models/guess.model';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {

  combination: Guess = {
    pions: [
      {color: "red"},
      {color: "orange"},
      {color: "yellow"},
      {color: "blue"},
    ]
  };

  guesses: Guess[] = [];
  nbCouleurs: number = 0;
  nbTentatives: number = 0;
  goodGuess: number = 0;
  win: boolean = false;
  lose: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getGuess(guess: Guess){
    this.nbTentatives++;
    this.guessCheck(guess);
    this.guesses?.push(guess);

    if(this.nbTentatives === 10){
      this.lose = true;
    }
  }

  guessCheck(guess: Guess){
    guess.black = 0;
    guess.white = 0;

    for(let i = 0; i < 4; i++){

      if(guess.pions[i].color == this.combination.pions[i].color){
        guess.pions[i].toBlack = true;
      }

      for(let j = 0; j < 4; j++){
        if(guess.pions[i].color == this.combination.pions[j].color && !guess.pions[i].toBlack){
          guess.pions[i].toWhite = true;
        }
      }

      if(guess.pions[i].toBlack){
        guess.black++;
      }else if(guess.pions[i].toWhite){
        guess.white++;
      }
    }

    for(let i = 0; i < 4; i++){
      for(let j = 0; j < 4; j++){
        if(guess.pions[i].color == guess.pions[j].color && guess.pions[j].toBlack){
          guess.pions[i].toWhite = false;
        }
      }
    }

    if(guess.black == 4){
      this.win = true;
    }
  }
}
