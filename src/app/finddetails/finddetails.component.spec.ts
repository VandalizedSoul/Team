import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddetailsComponent } from './finddetails.component';

describe('FinddetailsComponent', () => {
  let component: FinddetailsComponent;
  let fixture: ComponentFixture<FinddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
