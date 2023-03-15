import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TimerComponent],
  template: `
    <h1>{{name}}</h1>
    <app-timer></app-timer>
    <hr/>
  `,
})
export class App {
  name = 'Tabata Timer with Buttons';
}

bootstrapApplication(App);
