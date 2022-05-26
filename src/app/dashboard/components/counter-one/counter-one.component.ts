import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-one',
  templateUrl: './counter-one.component.html',
  styleUrls: ['./counter-one.component.scss']
})
export class CounterOneComponent implements OnInit {
  @Input() counter = 0;

  constructor() { }

  ngOnInit(): void {}

}
