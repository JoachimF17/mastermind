import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Colors } from 'src/app/enums/color.enum';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  colors: string[] = [];

  @Output('pickEmitter')
  emitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    Object.values(Colors).forEach(
      (value) => {
        if(typeof value === "string"){
          this.colors.push(value);
        }
      }
    )
  }

  onClick(col: string){
    this.emitter.emit(col);
  }

}
