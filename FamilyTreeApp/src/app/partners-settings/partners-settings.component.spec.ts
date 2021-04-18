import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersSettingsComponent } from './partners-settings.component';

describe('PartnersSettingsComponent', () => {
  let component: PartnersSettingsComponent;
  let fixture: ComponentFixture<PartnersSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
