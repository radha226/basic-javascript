import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayInsertComponent } from './array-insert.component';

describe('ArrayInsertComponent', () => {
  let component: ArrayInsertComponent;
  let fixture: ComponentFixture<ArrayInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
