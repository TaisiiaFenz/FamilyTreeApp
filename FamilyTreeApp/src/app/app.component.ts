import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./redux/app.state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'FamilyTreeApp';
  public entity = {};

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('entityPage').subscribe((entity) => {
      this.entity = entity;
      // console.log(entity);
    });
  }
}
