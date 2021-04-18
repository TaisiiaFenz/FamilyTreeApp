import {Component, Input} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less']
})
export class MainNavComponent {
  @Input() entity: {};

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  personalInfo = false;
  parentsSettings = false;
  partnersSettings = false;
  siblingSettings = false;
  childrenSettings = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  showPersonalInfo() {
    this.personalInfo = !this.personalInfo;
  }
  showParentsSettings() {
    this.parentsSettings = !this.parentsSettings;
  }
  showPartnersSettings() {
    this.partnersSettings = !this.partnersSettings;
  }
  showSiblingSettings() {
    this.siblingSettings = !this.siblingSettings;
  }
  showChildrenSettings() {
    this.childrenSettings = !this.childrenSettings;
  }

}
