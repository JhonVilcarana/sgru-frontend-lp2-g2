import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEvaluadorComponent } from './add-evaluador.component';

describe('AddEvaluadorComponent', () => {
  let component: AddEvaluadorComponent;
  let fixture: ComponentFixture<AddEvaluadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEvaluadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
