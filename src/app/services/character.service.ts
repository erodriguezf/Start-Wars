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

  public FilterOne(charact:string[], value:string): string[] {
    let filtereyes:string[]=[];
    let inputeyes:string='';
    for(let character of charact){
       this.getcharacter(character).subscribe(eye=>{
         inputeyes=eye.eye_color;
         if(inputeyes == value){
          filtereyes.push(character);
        }
       });  
      }
        return filtereyes;
  }
  
  public FilterTwo(charact:string[], value:string): string[]{
    let filtergender:string[]=[];
    let inputgender:string='';
    for(let character of charact){
       this.getcharacter(character).subscribe(gender=>{
         inputgender=gender.gender;
         if(inputgender == value){
          filtergender.push(character);
        }
       })
      }
      return filtergender;
  }

  public FilterTree(charact:string[], value:string):string[]{
    let filterfilms:string[]=[];
    let films:string[]=[];
    let filname:string='';
    for(let character of charact){
      this.getcharacter(character).subscribe(film=>{
        films=film.films;
        for(let fil of films){
           this.getfilmsofcharacter(fil).subscribe(fname=>{
               filname=fname.title;
               if(filname ==value){
                 filterfilms.push(character)
               }
         })}
      })
   };
   return filterfilms;
  }

}
