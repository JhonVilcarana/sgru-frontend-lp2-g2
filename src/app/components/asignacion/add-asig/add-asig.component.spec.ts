import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAsigComponent } from './add-asig.component';

describe('AddAsigComponent', () => {
  let component: AddAsigComponent;
  let fixture: ComponentFixture<AddAsigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAsigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
