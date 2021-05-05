import {Component, Input, OnInit} from '@angular/core';
import {AppState} from "../redux/app.state";
import {Store} from "@ngrx/store";
import {AddParents, ChangeLastIndex} from "../redux/entity.action";
import {Node} from "../node/node.model";

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
    const motherNode = new Node(
      this.entity.lastIndex + 1, `Mother of ${this.entity.activeNode.name}`, [], 'Ivanova', 'woman');
    const fatherNode = new Node(
      this.entity.lastIndex + 2, `Father of ${this.entity.activeNode.name}`, [], 'Ivanov', 'man');
    motherNode.partners = [fatherNode];
    fatherNode.partners = [motherNode];
    motherNode.children = [this.entity.activeNode];
    fatherNode.children = [this.entity.activeNode];
    this.store.dispatch(new ChangeLastIndex(this.entity.lastIndex + 2));
    this.store.dispatch(new AddParents(motherNode, fatherNode));
    console.log(this.entity);
  }
}
