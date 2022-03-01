import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Colors } from 'src/app/enums/color.enum';
import { Config } from 'src/app/models/config.model';
import { Guess } from 'src/app/models/guess.model';
import { Score } from 'src/app/models/score.model';

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

  @Input('getConfig')
  config!: Config;

  @Output('restartEmitter')
  emitter = new EventEmitter();

  score: Score = {

  };

  guesses: Guess[] = [];
  nbTentatives: number = 0;
  win: boolean = false;
  lose: boolean = false;
  timer?: any;
  temps: number = 1000;

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 4; i++){
      this.randomColor(i);
    }
  }

  getGuess(guess: Guess){
    if(!this.config.solo){
      this.combination = guess;
      this.config.solo = true;
      this.temps = 1000;
      this.timer = setInterval(() => {
        if(this.temps > 5){
          this.temps -= 5;
        }
      }, 1000);
    }else{
      this.nbTentatives++;
      this.guessCheck(guess);
      this.guesses.push(guess);
  
      if(this.nbTentatives === this.config.nbTentatives){
        this.setScore();
        this.lose = true;
      }
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
    }

    for(let i = 0; i < 4; i++){
      for(let j = 0; j < 4; j++){
        if(guess.pions[i].color == guess.pions[j].color && i != j && (guess.pions[j].toBlack || guess.pions[j].toWhite)){
          guess.pions[i].toWhite = false;
        }
      }

      if(guess.pions[i].toBlack){
        guess.black++;
      }else if(guess.pions[i].toWhite){
        guess.white++;
      }
    }

    if(guess.black == 4){
      this.setScore();
      this.win = true;
    }
  }

  randomColor(i: number){
    let rdm = Math.floor(Math.random() * this.config.colorSet.length);

    this.combination.pions[i].color = this.config.colorSet[rdm];
  }

  restart(){
    this.emitter.emit();
  }

  setScore(){
    clearInterval(this.timer);
    this.score.score = Math.floor(12 * this.temps * (this.config.nbTentatives - this.nbTentatives + 1) / (8 - this.config.colorSet.length));
  }
}
