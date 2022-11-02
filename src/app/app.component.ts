import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./+state/app.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'changedetector_demo';

  level0$ = this.store.select(e => e.app.level0);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.level0$.subscribe(val => console.log('fasz',  val))
  }


}
