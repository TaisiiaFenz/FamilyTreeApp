import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.less']
})
export class FamilyTreeComponent implements OnInit {
  @Input() entity;

  constructor() { }

  ngOnInit(): void {
  }

}
