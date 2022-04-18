import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../Interfaces/film.interface';
import { Films } from '../Interfaces/film.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class FilmservicesService {
  
  constructor(private http:HttpClient) { }

  public getFilms():Observable<Details>{
    return this.http.get<Details>(environment.url);
  }

  public getFilmsbyId(id:string):Observable<Films>{
    const filid:string=`${environment.url}/${id}`;
    return this.http.get<Films>(filid);
  }
}
