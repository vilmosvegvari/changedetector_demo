import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {animate, animateChild, query, style, transition, trigger} from "@angular/animations";
import {changeState} from "../../+state/app.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../+state/app.reducer";

@Component({
  selector: 'app-test1-onpush',
  templateUrl: './test1-onpush.component.html',
  styleUrls: ['./test1-onpush.component.scss'],
  animations: [
    trigger('flash1', [
      transition('false <=> true',
        [
          style({backgroundColor: 'white'}),
          animate(500, style({backgroundColor: 'red'})),
          query('@flash2', animateChild()),
        ]),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test1OnpushComponent {
  @Input() side = 'a'

  animation = false;

  level2a$ = this.store.select(e => e.app.level2a);
  level2b$ = this.store.select(e => e.app.level2b);
  level2c$ = this.store.select(e => e.app.level2c);
  level2d$ = this.store.select(e => e.app.level2d);

  constructor(private store: Store<AppState>) {
  }

  render(): Date {
    this.animation = !this.animation;
    return new Date();
  }

  button(): void {
    // empty
  }

  changeStrategy(): void {
    const obj = this.side == 'a' ? {level1a: false} : {level1b: false};
    this.store.dispatch(changeState(obj));
  }
}
