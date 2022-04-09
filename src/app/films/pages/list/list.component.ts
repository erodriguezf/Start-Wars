import { Component, OnInit } from '@angular/core';
import { FilmservicesService } from 'src/app/services/filmservices.service';
import { Result } from '../../../Interfaces/film.interface';
import { Films } from 'src/app/Interfaces/film.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public ListFilm:Result[]=[];
  
  constructor(private films:FilmservicesService) {}

  ngOnInit(): void {
    this.films.getFilms().subscribe(films =>{
      this.ListFilm=films.results;
     })
  }

}
