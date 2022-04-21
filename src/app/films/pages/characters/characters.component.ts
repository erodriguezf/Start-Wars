import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmservicesService } from 'src/app/services/filmservices.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

export class CharactersComponent implements OnInit {
  public charactersurl:string[]=[];
  public criteria:string='';
  public page:number=1;
  
  constructor(private activated:ActivatedRoute, 
              private filservice:FilmservicesService,
              private Route:Router) {}

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
}
