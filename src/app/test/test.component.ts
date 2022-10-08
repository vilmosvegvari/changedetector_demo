import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {animate, animateChild, query, style, transition, trigger} from "@angular/animations";

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
