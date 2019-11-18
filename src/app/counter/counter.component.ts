import { Component, OnInit, ɵmarkDirty } from '@angular/core';
import { interval, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  data = interval(1000);
  numbers = new BehaviorSubject(0);

  ngOnInit() {
    this.data.subscribe(num => {
      console.log(num);
      this.numbers.next(num);
      ɵmarkDirty(this);
    });
  }
}
