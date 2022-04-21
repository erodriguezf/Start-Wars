import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SpinerService {
  public isloading:Subject<boolean>=new Subject<boolean>();

  constructor() { }
  
  public show():void{
   this.isloading.next(true);
  }

  public hide():void{
    this.isloading.next(false);
  }
}
