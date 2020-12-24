import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsigComponent } from './list-asig.component';

describe('ListAsigComponent', () => {
  let component: ListAsigComponent;
  let fixture: ComponentFixture<ListAsigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAsigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
