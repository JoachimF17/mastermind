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
    nbCouleurs: 7
  }

  start: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStart(){
    this.start = !this.start;
  }

}
