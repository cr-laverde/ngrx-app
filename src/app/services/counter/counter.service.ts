import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private _counterData: BehaviorSubject<number> = new BehaviorSubject(0);

  public get counter(): Observable<number>{
    return this._counterData.asObservable();
  }

  constructor() {}

  setCounter(counter: number){
    this._counterData.next(counter);
  }

}
