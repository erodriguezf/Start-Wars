import { Pipe, PipeTransform } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  constructor(private characterservice:CharacterService){}

  transform(listoffilms: string[], filter: string): string[] {
  
   return this.filtercharacterbyfeature(listoffilms,filter);  
  }

  filtercharacterbyfeature(listoffilm:string[], filter:string): string[]{
    let filters:string[]=[];
    let films:string[]=[];
    let charactersname:string[]=[];
   
    if(!filter){
       return listoffilm;
    }

    for(let lis of listoffilm){
      this.characterservice.getcharacter(lis).subscribe(info=>{
        if(info.eye_color.startsWith(filter.trim())){
             filters.push(lis);
        }else if(info.gender.startsWith(filter.trim())){
           filters.push(lis);
        }else {
           films=info.films;
           for(let film of films){
             this.characterservice.getfilmsofcharacter(film).subscribe(namefilm=>{
               if(namefilm.title.startsWith(filter.trim())){
                 if(charactersname.indexOf(info.name)<0){
                   charactersname.push(info.name)
                   filters.push(lis);
                 }
               }
             })
           }
        }
      })
   }
   return filters;
  }
}