import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { CounterOneComponent } from './components/counter-one/counter-one.component';
import { CounterTwoComponent } from './components/counter-two/counter-two.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    CounterOneComponent,
    CounterTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    CounterOneComponent,
    CounterTwoComponent
  ]
})
export class DashboardModule { }
