import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [CommonModule, FormsModule],
templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
  @Input()fruit =  {
    name: "Apfel",
    img:"apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews:[{name: "Kevin W.", text: "ist lecker"},{name: "Arne P.", text: "nicht so meins"}],
  };

  inputData = "";

  @Output()fruitname = new EventEmitter<string>();

  sendInputData() {
    this.fruitname.emit(this.inputData);
    this.inputData = "";
    
  }

  trackByName(index: number, fruit: any): string {
    return fruit.name;
  }
  
  getStars(stars: number) {
    const fullStars = Math.floor(stars);
    const halfStar = stars - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return { fullStars, halfStar, emptyStars };
  }
}
