import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/models/config.model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  config: Config = {
    solo: true,
    nbTentatives: 10,
    colorSet: []
  }

  start: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStart(){
    this.start = !this.start;
  }

  getPick(pick: string){
    if(this.config.colorSet.length < 7 && !this.config.colorSet.includes(pick)){
      this.config.colorSet.push(pick);
    }
  }

  remove(ind: number){
    this.config.colorSet.splice(ind, 1);
  }

}
