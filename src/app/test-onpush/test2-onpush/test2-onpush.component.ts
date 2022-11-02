import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {Store} from "@ngrx/store";
import {AppState} from "../../+state/app.reducer";
import {changeState} from "../../+state/app.actions";

@Component({
  selector: 'app-test2-onpush',
  templateUrl: './test2-onpush.component.html',
  styleUrls: ['./test2-onpush.component.scss'],
  animations: [
    trigger('flash2', [
      transition('false <=> true',
        [
          style({backgroundColor: 'white'}),
          animate(500, style({backgroundColor: 'yellow'}))
        ]),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test2OnpushComponent {
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
        obj = {level2a: false};
        break;
      case 'b':
        obj = {level2b: false};
        break;
      case 'c':
        obj = {level2c: false};
        break;
      case 'd':
        obj = {level2d: false};
        break;
    }

    if (obj !== undefined) {

      this.store.dispatch(changeState(obj));
    }
  }
}
