import {Component, Input} from '@angular/core';
import {animate, animateChild, query, style, transition, trigger} from "@angular/animations";
import {changeState} from "../../+state/app.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../+state/app.reducer";

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
  animations: [
    trigger('flash1', [
      transition('false <=> true',
        [
          style({backgroundColor: '#fefae0'}),
          animate(500),
          animate(500, style({backgroundColor: '#bc6c25'})),
        ]),
    ])
  ]
})
export class Test1Component {
  @Input() side = '';
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
    const obj = this.side == 'a' ? {level1a: true} : {level1b: true};
    this.store.dispatch(changeState(obj));
  }
}
