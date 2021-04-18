import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.less']
})
export class NodeComponent implements OnInit {
  @Input() treeNode;

  constructor() { }

  ngOnInit(): void {
  }

}
