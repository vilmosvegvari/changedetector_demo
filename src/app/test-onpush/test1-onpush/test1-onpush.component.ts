import {ChangeDetectionStrategy, Component} from '@angular/core';
import {animate, animateChild, query, style, transition, trigger} from "@angular/animations";

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

  animation = false;

  render(): Date {
    console.log('render test1-onpush', this.animation)
    this.animation = !this.animation;
    // this.cdr.detach()
    return new Date();
  }

  button(): void {
    // this.cdr.reattach()
  }

}
