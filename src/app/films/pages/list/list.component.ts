import { Component, OnInit } from '@angular/core';
import { FilmservicesService } from 'src/app/services/filmservices.service';
import { Films } from 'src/app/Interfaces/film.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  public ListFilm:Films[]=[];
  public load:boolean=false;
  
  constructor(private films:FilmservicesService) {}

  ngOnInit(): void {
    this.films.getFilms().subscribe(films =>{
      this.ListFilm=films.results;
      this.load=true;
     })
  }

}
