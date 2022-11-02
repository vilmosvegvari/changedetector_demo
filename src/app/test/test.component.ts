import {Component} from '@angular/core';
import {animate, animateChild, query, style, transition, trigger} from "@angular/animations";
import {Store} from "@ngrx/store";
import {changeState} from "../+state/app.actions";
import {AppState} from "../+state/app.reducer";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  animations: [
    trigger('flash', [
      transition('false <=> true',
        [
          style({backgroundColor: 'white'}),
          animate(500, style({backgroundColor: 'yellow'})),
          query('@flash1', animateChild())
        ]),
    ])
  ],
})

export class TestComponent {
  animation = false;

  level1a$ = this.store.select(e => e.app.level1a);
  level1b$ = this.store.select(e => e.app.level1b);

  constructor(private store: Store<AppState>) {
  }

  render(): Date {
    this.animation = !this.animation;
    return new Date();
  }

  button(): void {
    //empty func
  }

  changeStrategy(): void {
    this.store.dispatch(changeState({level0: true}));
  }
}
