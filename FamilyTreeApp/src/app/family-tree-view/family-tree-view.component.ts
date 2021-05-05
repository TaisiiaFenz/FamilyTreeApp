import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-family-tree-view',
  templateUrl: './family-tree-view.component.html',
  styleUrls: ['./family-tree-view.component.less']
})
export class FamilyTreeViewComponent implements OnInit {

  @Input() familyTree;

  constructor() { }

  ngOnInit(): void {
  }

}
