import {Component, Input, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {paintNodes} from "../paintNodes";

@Component({
  selector: 'app-family-tree-view',
  templateUrl: './family-tree-view.component.html',
  styleUrls: ['./family-tree-view.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FamilyTreeViewComponent implements OnInit {

  @Input() familyTree;

  constructor() { }

  ngOnInit(): void {}

  isNeedToPaintNode(node) {
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
