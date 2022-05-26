import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from 'src/app/services/counter/counter.service';

@Component({
  selector: 'app-counter-two',
  templateUrl: './counter-two.component.html',
  styleUrls: ['./counter-two.component.scss']
})
export class CounterTwoComponent implements OnInit {
  counter$: Observable<number> = new Observable();

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counter$ = this.counterService.counter;
  }

}
