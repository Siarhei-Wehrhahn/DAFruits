import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

}
