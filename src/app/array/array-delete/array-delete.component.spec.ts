import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayDeleteComponent } from './array-delete.component';

describe('ArrayDeleteComponent', () => {
  let component: ArrayDeleteComponent;
  let fixture: ComponentFixture<ArrayDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
