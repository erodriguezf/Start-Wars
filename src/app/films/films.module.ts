import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsRoutingModule } from './films-routing.module';
import { CharacterComponent } from './components/character/character.component';
import { FilmComponent } from './components/film/film.component';
import { SpinerComponent } from './components/spiner/spiner.component';

@NgModule({
  declarations: [
    CharacterComponent,
    FilmComponent,
    SpinerComponent,
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
  ],
  exports:[
    CharacterComponent,
    FilmComponent,
    SpinerComponent,
  ]
})
export class FilmsModule { }
