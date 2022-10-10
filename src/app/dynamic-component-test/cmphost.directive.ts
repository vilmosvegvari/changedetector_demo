import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[cmphost]',
})
export class CmphostDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
