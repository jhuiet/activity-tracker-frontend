import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantActivitiesComponent } from './important-activities.component';

describe('ImportantActivitiesComponent', () => {
  let component: ImportantActivitiesComponent;
  let fixture: ComponentFixture<ImportantActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
