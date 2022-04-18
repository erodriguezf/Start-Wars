import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { FilmservicesService } from 'src/app/services/filmservices.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {
  public charactersurl:string[]=[];
  public eyecolor:string='';
  public gender:string='';
  public film:string='';
  public filtereyecolor:string[]=[];
  public filtergender:string[]=[];
  public filterfilm:string[]=[];
  public filter:string[]=[];
  public page:number=1;
  
  constructor(private activated:ActivatedRoute, 
              private filservice:FilmservicesService,
              private character:CharacterService,
              private Route:Router) 
  {
   
   }

  ngOnInit(): void {
    this.init();
  }

  public init():void{
    this.activated.params.subscribe(({id})=>
      this.filservice.getFilmsbyId(id).subscribe(data =>{
          this.charactersurl = data.characters;
      })
    )
  }
  
  public Back():void{
   this.Route.navigate(['/films/list'])
  }

  public filterforeyes(charact:string[]):void{
      this.filtereyecolor = this.character.FilterOne(charact,this.eyecolor);
      this.filter=this.filtereyecolor;
      this.gender='';
      this.film='';
  }

  public filterforgender(charact:string[]):void{
      this.filtergender= this.character.FilterTwo(charact,this.gender);
     this.filter=this.filtergender;
      this.eyecolor='';
      this.film='';
  }

  public filterforfilms(charact:string[]):void{
   this.filterfilm=this.character.FilterTree(charact,this.film);
   this.filter=this.filterfilm;
   this.eyecolor='';
   this.gender='';
  }

}
