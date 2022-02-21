import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})
export class JeuComponent implements OnInit {

  combination: string[] = ["blue", "green", "yellow", "red"];
  guesses: string[][] = [
    ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""],
    ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]
  ];
  guessesBg: string[][] = [
    ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""],
    ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]
  ];
  nbCouleurs: number = 0;
  nbTentatives: number = 0;
  goodGuess: number = 0;
  win: boolean = false;
  toGreen: boolean = false;
  toYellow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onColorClick(color: string){
    this.guesses[this.nbTentatives][this.nbCouleurs] = color;

    if(this.nbCouleurs < 4)
      this.nbCouleurs++;

    console.log(this.nbCouleurs);
  }

  onResetClick(){
    this.guesses[this.nbTentatives] = ["", "", "", ""];
    this.nbCouleurs = 0;
  }

  onValidateClick(){
    if(this.nbCouleurs === 4){
      for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
          if(this.combination[j] === this.guesses[this.nbTentatives][i]){
            if(i === j)
              this.toGreen = true;
            else
              this.toYellow = true;
          }
        }

        if(this.toGreen)
          this.guessesBg[this.nbTentatives][i] = 'palegreen';
        else if(this.toYellow)
          this.guessesBg[this.nbTentatives][i] = 'palegoldenrod';
        else
          this.guessesBg[this.nbTentatives][i] = 'palevioletred';

        this.toGreen = false;
        this.toYellow = false;
      }

      for(let i = 0; i < 4; i++)
      {
        if(this.combination[i] === this.guesses[this.nbTentatives][i]){
          this.goodGuess++;
        }
      }

      if(this.goodGuess === 4)
        this.win = true;
      else
        this.goodGuess = 0;

      this.nbCouleurs = 0;
      this.nbTentatives++;
    }
  }
}
