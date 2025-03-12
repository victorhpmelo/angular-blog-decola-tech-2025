import { Component, Input } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
    @Input()
    photoCover:string = "";
    @Input()
    cardTitle:string = "";
    @Input()
    Id:string="0"
}
