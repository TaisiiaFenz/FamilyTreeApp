import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.less']
})
export class PersonalInfoComponent implements OnInit {

  @Input() entity;

  constructor() { }

  ngOnInit(): void {
  }

}
