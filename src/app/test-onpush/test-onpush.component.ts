import {ChangeDetectorRef, Component} from '@angular/core';
import {animate, animateChild, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-test-onpush',
  templateUrl: './test-onpush.component.html',
  styleUrls: ['./test-onpush.component.scss'],
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
export class TestOnpushComponent {

  animation = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  render(): Date {
    console.log('render test')
    this.animation = !this.animation;
    // this.cdr.detach()
    return new Date();
  }

  button(): void {
    // this.cdr.reattach()
  }

}
