import { Component, OnInit, ɵmarkDirty } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  data = interval(1000);
  number: number;

  ngOnInit() {
    this.data.pipe(tap(() => ɵmarkDirty(this))).subscribe(num => {
      console.log(num);
      this.number = num;
    });
  }
}
