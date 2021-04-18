import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsSettingsComponent } from './parents-settings.component';

describe('ParentsSettingsComponent', () => {
  let component: ParentsSettingsComponent;
  let fixture: ComponentFixture<ParentsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
