import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {paintNodes} from "../paintNodes";
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";

@Component({
  selector: 'app-family-tree-view',
  templateUrl: './family-tree-view.component.html',
  styleUrls: ['./family-tree-view.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FamilyTreeViewComponent implements OnInit {

  @Input() familyTree;

  public entity;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // console.log('CHANGE');
    this.store.select('entityPage').subscribe((entity) => {
      this.entity = entity;
    });
  }

  isNeedToPaintNode(node) {
    console.log(node);
    // console.log(paintNodes);
    let i = 0;
    paintNodes.forEach((el) => {
      if (el.id === node.id) {
        i = 1;
      }
    });
    if (i == 1) {
      return false;
    } else {
      return true;
    }
  }

}
