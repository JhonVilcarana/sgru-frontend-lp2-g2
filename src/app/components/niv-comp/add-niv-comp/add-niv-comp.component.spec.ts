import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNivCompComponent } from './add-niv-comp.component';

describe('AddNivCompComponent', () => {
  let component: AddNivCompComponent;
  let fixture: ComponentFixture<AddNivCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNivCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNivCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
