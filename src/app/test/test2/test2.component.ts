import {Component, Input} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {Store} from "@ngrx/store";
import {AppState} from "../../+state/app.reducer";
import {changeState} from "../../+state/app.actions";

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
  animations: [
    trigger('flash2', [
      transition('false <=> true',
        [
          style({backgroundColor: 'white'}),
          animate(500, style({backgroundColor: 'yellow'}))
        ]),
    ])
  ],
})
export class Test2Component {
  @Input() side = '';

  animation = false;

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
    let obj;

    switch (this.side) {
      case 'a':
        obj = {level2a: true};
        break;
      case 'b':
        obj = {level2b: true};
        break;
      case 'c':
        obj = {level2c: true};
        break;
      case 'd':
        obj = {level2d: true};
        break;
    }

    if (obj !== undefined) {

      this.store.dispatch(changeState(obj));
    }
  }

}
