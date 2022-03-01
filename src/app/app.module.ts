import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeuComponent } from './components/jeu/jeu.component';
import { PlayerGuessComponent } from './components/player-guess/player-guess.component';
import { BoardComponent } from './components/board/board.component';
import { OptionsComponent } from './components/options/options.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    JeuComponent,
    PlayerGuessComponent,
    BoardComponent,
    OptionsComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
