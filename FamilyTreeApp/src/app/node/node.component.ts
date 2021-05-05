import {Component, Input, OnInit} from '@angular/core';
import {AddParents, ChangeActiveNode, ChangeLastIndex} from "../redux/entity.action";
import {Store} from "@ngrx/store";
import {AppState} from "../redux/app.state";

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() treeNode;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  changeActiveNode() {
    this.store.dispatch(new ChangeActiveNode(this.treeNode));
  }
}
