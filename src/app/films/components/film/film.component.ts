import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})

export class FilmComponent implements OnInit {
  @Input() film!:string;
  public Film!:string;

  constructor(private character:CharacterService) { }

  ngOnInit(): void {
   this.init();
  }

  public init(){
    this.character.getfilmsofcharacter(this.film).subscribe(info=>{
      this.Film=info.title;
   })
  }

}
