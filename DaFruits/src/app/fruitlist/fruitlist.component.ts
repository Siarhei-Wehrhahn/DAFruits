import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SinglefruitComponent],
templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {
  fruitlistdata = inject(FruitlistdataService)

  fontColorGood = 'green'; 
  fontColorBad = ' red';

  

  addComment(comment:string, index:number) {
    this.fruitlistdata.fruitlist[index].reviews.push({
      name: "Paul",
      text: comment,
    })
  }

  nameLog(name:string) {
    console.log(name);
    
  }
}
