import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../Interfaces/character.interface';
import {  Films } from '../Interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  constructor(private http:HttpClient) { }

  public getcharacter(data:string): Observable<Character>{
  return this.http.get<Character>(data);
  }

  public getfilmsofcharacter(film:string): Observable<Films>{
  return this.http.get<Films>(film);
  }


}
