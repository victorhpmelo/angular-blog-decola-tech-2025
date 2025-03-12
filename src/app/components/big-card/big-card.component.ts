import { Component, Input } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  standalone: false,
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
   dataFake(n:number){
    return dataFake[n];
  }

  
  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string ='';
  @Input()
  cardDescription:string ='';
  @Input()
  Id:string = "0";
}
