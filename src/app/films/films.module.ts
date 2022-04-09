import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { CharacterComponent } from './components/character/character.component';
import { FilmComponent } from './components/film/film.component';


@NgModule({
  declarations: [
    CharacterComponent,
    FilmComponent,
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    
  ],
  exports:[
    CharacterComponent,
    FilmComponent,
  ]
})
export class FilmsModule { }
