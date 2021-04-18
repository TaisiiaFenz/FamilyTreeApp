import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenSettingsComponent } from './children-settings.component';

describe('ChildrenSettingsComponent', () => {
  let component: ChildrenSettingsComponent;
  let fixture: ComponentFixture<ChildrenSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
