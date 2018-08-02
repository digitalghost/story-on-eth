import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HottestComponent } from './hottest.component';

describe('HottestComponent', () => {
  let component: HottestComponent;
  let fixture: ComponentFixture<HottestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HottestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HottestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
