import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
    <button (click)="increaseBy()">+</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy()">-</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy():void {
    this.counter++;
  }

  resetCounter():void {
    this.counter = 10;
  }

  decreaseBy():void {
    this.counter--;
  }
}
