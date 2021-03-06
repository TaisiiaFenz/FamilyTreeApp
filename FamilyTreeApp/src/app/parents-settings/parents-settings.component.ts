import {Component, Input, OnInit} from '@angular/core';
import {AppState} from "../redux/app.state";
import {Store} from "@ngrx/store";
import {AddParents, ChangeLastIndex} from "../redux/entity.action";
import {Node} from "../node/node.model";
import {paintNodes} from "../paintNodes";

@Component({
  selector: 'app-parents-settings',
  templateUrl: './parents-settings.component.html',
  styleUrls: ['./parents-settings.component.less']
})
export class ParentsSettingsComponent implements OnInit {

  public entity;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('entityPage').subscribe((entity) => {
      this.entity = entity;
    });
  }

  addParents() {
    paintNodes.splice(0,paintNodes.length);
    const motherNode = new Node(
      this.entity.lastIndex + 1, `M of ${this.entity.activeNode.name}`, [], 'Ivanova', 'woman');
    const fatherNode = new Node(
      this.entity.lastIndex + 2, `F of ${this.entity.activeNode.name}`, [], 'Ivanov', 'man');
    motherNode.partners = [fatherNode];
    fatherNode.partners = [motherNode];
    motherNode.children = [this.entity.activeNode];
    fatherNode.children = [this.entity.activeNode];
    this.store.dispatch(new ChangeLastIndex(this.entity.lastIndex + 2));
    this.store.dispatch(new AddParents(motherNode, fatherNode));
  }
}
