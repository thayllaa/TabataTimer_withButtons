import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  let acao = '';
  let ciclo = 0;
  let tempo = 5;

  start() {}

  pause() {}

  stop() {}
}