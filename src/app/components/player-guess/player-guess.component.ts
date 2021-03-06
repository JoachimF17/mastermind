import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Config } from 'src/app/models/config.model';
import { Guess } from 'src/app/models/guess.model';
import { Pion } from 'src/app/models/pion.model';

@Component({
  selector: 'app-player-guess',
  templateUrl: './player-guess.component.html',
  styleUrls: ['./player-guess.component.css']
})
export class PlayerGuessComponent implements OnInit {

  guess: Guess = {
    pions: [
      {color: ""},
      {color: ""},
      {color: ""},
      {color: ""},
    ]
  };

  picks: number = 0;

  @Input('termine')
  termine: boolean = false;

  @Input('config')
  config!: Config;

  @Output('guessEmitter')
  emitter = new EventEmitter<Guess>();

  constructor() { }

  ngOnInit(): void {
  }

  onColorClick(color: string){
    if(!this.termine){
      if(this.guess.pions[0].color.length < 1){
        this.guess.pions[0].color = color;
        this.picks++;
      }else if(this.guess.pions[1].color.length < 1){
        this.guess.pions[1].color = color;
        this.picks++;
      }else if(this.guess.pions[2].color.length < 1){
        this.guess.pions[2].color = color;
        this.picks++;
      }else if(this.guess.pions[3].color.length < 1){
        this.guess.pions[3].color = color;
        this.picks++;
      }
    }
  }

  onResetClick(){
    this.picks = 0;
    this.guess.pions[0].color = "";
    this.guess.pions[1].color = "";
    this.guess.pions[2].color = "";
    this.guess.pions[3].color = "";
  }

  onValidateClick(){
    let envoi = {
      pions: [{color: this.guess.pions[0].color},
              {color: this.guess.pions[1].color},
              {color: this.guess.pions[2].color},
              {color: this.guess.pions[3].color}
            ]
    };
    this.emitter.emit(envoi);
    this.onResetClick();
  }

  onGuessClick(pion: Pion){
    if(pion.color.length > 0){
      pion.color = "";
      this.picks--;
    }
  }

}
