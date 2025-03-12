import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
     @Input()
     photoCover:string = dataFake[0].photo || '';
     @Input()
     contentTitle:string = dataFake[0].title || '';
     @Input()
     contentDescription:string = dataFake[0].description || '';
     private id:string | null = '0' ;
    constructor(
      private route: ActivatedRoute,
    ) {}

    ngOnInit() {
      this.route.paramMap.subscribe(value => {
        this.id = value.get('id');
      });
        this.setValuesToComponent(this.id);
    }
    setValuesToComponent(id:string|null){
      const result = dataFake.filter(
                        article => article.id === id)[0];
      
      this.contentTitle = result.title || '';
      this.contentDescription = result.description || '';
      this.photoCover = result.photo || '';
    }
}
