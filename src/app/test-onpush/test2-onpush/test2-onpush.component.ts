import {ChangeDetectionStrategy, Component} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

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
