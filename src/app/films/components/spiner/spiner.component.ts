import { Component} from '@angular/core';
import { Subject } from 'rxjs';
import { SpinerService } from 'src/app/services/spiner.service';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.scss']
})

export class SpinerComponent {
  public isloading:Subject<boolean>=this.spiner.isloading;
  
  constructor(private spiner:SpinerService) { }
}