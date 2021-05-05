import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.less']
})
export class FamilyTreeComponent implements OnInit {
  @Input() entity;

  public familyTree;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('entityPage').subscribe((entity) => {
      this.familyTree = [entity.activeNode];
    });
  }
}
