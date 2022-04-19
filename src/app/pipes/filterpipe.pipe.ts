import { Pipe, PipeTransform } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  constructor(private characterservice:CharacterService){

  }

  transform(list: string[], filter: string): string[] {
  let filtereyes:string[]=[];
  let films:string[]=[];
  
   if(!filter) return list;
        for(let lis of list){
           this.characterservice.getcharacter(lis).subscribe(info=>{
             if(info.eye_color.startsWith(filter)){
                  filtereyes.push(lis);
             }else if(info.gender.startsWith(filter)){
                filtereyes.push(lis);
             }else{
                films=info.films;
                for(let film of films){
                  this.characterservice.getfilmsofcharacter(film).subscribe(namefilm=>{
                    if(namefilm.title.startsWith(filter)){
                      filtereyes.push(lis);
                    }
                  })
                }
             }
           })
        }
     
    return filtereyes;
  }

}
