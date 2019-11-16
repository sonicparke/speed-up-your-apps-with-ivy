import { Observable, from, concat, ReplaySubject } from 'rxjs';

import { OnInit, OnDestroy, ɵmarkDirty } from '@angular/core';

import { mergeMap, tap, takeUntil } from 'rxjs/operators';

type ObservableDictionary<T> = {
  [P in keyof T]: Observable<T[P]>;
};

const OnInitSubject = Symbol('OnInitSubject');
const OnDestroySubject = Symbol('OnDestroySubject');
export abstract class ReactiveComponent implements OnInit, OnDestroy {
  private [OnInitSubject] = new ReplaySubject<true>(1);
  private [OnDestroySubject] = new ReplaySubject<true>(1);

  public get onInit$() {
    return this[OnInitSubject].asObservable();
  }

  public get onDestroy$() {
    return this[OnDestroySubject].asObservable();
  }

  connect<T>(sources: ObservableDictionary<T>): T {
    const sink = {} as T;
    const sourceKeys = Object.keys(sources) as (keyof T)[];
    const updateSink$ = from(sourceKeys).pipe(
      mergeMap(sourceKey => {
        const source$ = sources[sourceKey];

        return source$.pipe(
          tap((sinkValue: any) => {
            sink[sourceKey] = sinkValue;
          })
        );
      })
    );

    concat(this.onInit$, updateSink$)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => ɵmarkDirty(this));

    return sink;
  }

  ngOnInit() {
    this[OnInitSubject].next(true);
    this[OnInitSubject].complete();
  }

  ngOnDestroy() {
    this[OnDestroySubject].next(true);
    this[OnDestroySubject].complete();
  }
}
