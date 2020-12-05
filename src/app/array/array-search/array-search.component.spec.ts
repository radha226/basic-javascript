import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraySearchComponent } from './array-search.component';

describe('ArraySearchComponent', () => {
  let component: ArraySearchComponent;
  let fixture: ComponentFixture<ArraySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
