import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEvaluadorComponent } from './list-evaluador.component';

describe('ListEvaluadorComponent', () => {
  let component: ListEvaluadorComponent;
  let fixture: ComponentFixture<ListEvaluadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEvaluadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
