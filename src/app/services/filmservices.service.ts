import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../Interfaces/film.interface';
import { Films } from '../Interfaces/film.interface';
@Injectable({
  providedIn: 'root'
})
export class FilmservicesService {
  private url:string ="https://swapi.dev/api/films";
  constructor(private http:HttpClient) { }

  public getFilms():Observable<Films>{
    return this.http.get<Films>(this.url);
  }

  public getFilmsbyId(id:string){
    const filid:string=`${this.url}/${id}`;
    return this.http.get<Result>(filid);
  }
}
