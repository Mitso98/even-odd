import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() evenEmitter = new EventEmitter<number>();
  @Output() oddEmitter = new EventEmitter<number>();

  counter = 0;
  reference: any = null;

  isEven(num: number): boolean {
    if (num % 2 === 0) return true;
    return false;
  }

  sendData(isEven: boolean) {
    if (isEven) {
      this.evenEmitter.emit(this.counter);
    } else {
      this.oddEmitter.emit(this.counter);
    }
  }

  onStart() {
    if (this.reference) {
      return;
    }

    this.reference = setInterval(() => {
      const isEven = this.isEven(++this.counter);
      this.sendData(isEven);
    }, 1000);
  }

  onEnd() {
    clearInterval(this.reference);
    this.reference = null;
  }
}
