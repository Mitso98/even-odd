import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  evenNumberList: number[] = [];
  oddNumberList: number[] = [];
  evenComponentCreator(counter: number) {
    this.evenNumberList.push(counter);
  }

  oddComponentCreator(counter: number) {
    this.oddNumberList.push(counter);
  }
}
