import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
    @Input()
    photoCover:string = "";
    @Input()
    cardTitle:string = "";
}
