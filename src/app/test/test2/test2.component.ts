import {Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

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

  animation = false;

  render(): Date {
    console.log('render test2')
    this.animation = !this.animation;
    // this.cdr.detach()
    return new Date();
  }

  button(): void {
    // this.cdr.reattach()
  }

}
