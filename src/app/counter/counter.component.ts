import { Component, OnInit, ɵmarkDirty } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  data = interval(1000);
  number: number;

  ngOnInit() {
    this.data.subscribe(num => {
      console.log(num);
      this.number = num;
      ɵmarkDirty(this);
    });
  }
}
