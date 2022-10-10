import {Component, ViewChild} from '@angular/core';
import {CmphostDirective} from "./cmphost.directive";
import {BaseCDComponent} from "../base-cd/base-cd.component";
import {Test1Component} from "../test/test1/test1.component";
import {Test1OnpushComponent} from "../test-onpush/test1-onpush/test1-onpush.component";

@Component({
  selector: 'app-dynamic-component-test',

  templateUrl: './dynamic-component-test.component.html',
  styleUrls: ['./dynamic-component-test.component.scss']
})
export class DynamicComponentTestComponent extends BaseCDComponent {

  @ViewChild(CmphostDirective, {static: true}) cmpHost!: CmphostDirective;

  constructor() {
    super()
  }

  lastWasDefault = false;

  changeCmp(): void {
    const viewContainerRef = this.cmpHost.viewContainerRef;
    viewContainerRef.clear();


    if (this.lastWasDefault) {
      const componentRef = viewContainerRef.createComponent<void>(Test1OnpushComponent);
    } else {
      const componentRef = viewContainerRef.createComponent<BaseCDComponent>(Test1Component);
    }
    this.lastWasDefault = ! this.lastWasDefault;
  }

}
