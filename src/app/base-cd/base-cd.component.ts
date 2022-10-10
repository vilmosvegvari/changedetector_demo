import {Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-base-cd',
  templateUrl: './base-cd.component.html',
  styleUrls: ['./base-cd.component.scss'],
  animations: [
    trigger('flash', [
      transition('false <=> true',
        [
          style({backgroundColor: 'white'}),
          animate(500, style({backgroundColor: 'yellow'})),
        ]),
    ])
  ],
})
export class BaseCDComponent {

  animation = false;

  render(): Date {
    this.animation = !this.animation;
    return new Date();
  }

  button(): void {
    //empty
  }
}
