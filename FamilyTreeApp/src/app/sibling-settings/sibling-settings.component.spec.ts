import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingSettingsComponent } from './sibling-settings.component';

describe('SiblingSettingsComponent', () => {
  let component: SiblingSettingsComponent;
  let fixture: ComponentFixture<SiblingSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiblingSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
