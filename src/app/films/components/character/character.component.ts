import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/Interfaces/character.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})

export class CharacterComponent implements OnInit {
   @Input () item!:string;
   public Character!:Character;
  
  constructor(private character:CharacterService) { }

  ngOnInit(): void {
    this.init();
  }

  public init():void{
    this.character.getcharacter(this.item).subscribe(info=>{
      this.Character=info;
    })
  }
}
