import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AddParents, ChangeActiveNode,  ChangeLastIndex} from "../redux/entity.action";
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";
import {paintNodes} from "../paintNodes";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() treeNode;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    let i = 0;
    paintNodes.forEach((el) => {
      if (el.id === this.treeNode.id) {
        i = 1;
      }
    });
    if (i == 0) {
      paintNodes.push(this.treeNode);
    }
  }

  changeActiveNode() {
    paintNodes.splice(0,paintNodes.length);
    this.store.dispatch(new ChangeActiveNode(this.treeNode));
  }
}
