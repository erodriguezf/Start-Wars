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
   @Input () filtercolor!:string ;
   @Input () filtergender!:string;
   @Input () filterfilm!:string;
   public Character!:Character;
   public load:boolean=false;
   
  constructor(private character:CharacterService) { }

  ngOnInit(): void {
     this.character.getcharacter(this.item).subscribe(info=>{
       this.Character=info;
       this.load=true;
     })
  }

}
