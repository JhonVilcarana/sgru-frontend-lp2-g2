import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSemestreComponent } from './add-semestre.component';

describe('AddSemestreComponent', () => {
  let component: AddSemestreComponent;
  let fixture: ComponentFixture<AddSemestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSemestreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
