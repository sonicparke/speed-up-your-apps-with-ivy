import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith, scan } from 'rxjs/operators';
import { ReactiveComponent } from './reactive.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent extends ReactiveComponent {
  values$ = new Subject<number>();
  state = this.connect({
    count: this.values$.pipe(
      startWith(0),
      scan((count, next) => count + next, 0)
    )
  });
  pushValue(value: number) {
    this.values$.next(value);
  }
}
