import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSemestreComponent } from './list-semestre.component';

describe('ListSemestreComponent', () => {
  let component: ListSemestreComponent;
  let fixture: ComponentFixture<ListSemestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSemestreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
