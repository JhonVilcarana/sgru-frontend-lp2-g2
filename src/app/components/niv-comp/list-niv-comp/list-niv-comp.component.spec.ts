import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNivCompComponent } from './list-niv-comp.component';

describe('ListNivCompComponent', () => {
  let component: ListNivCompComponent;
  let fixture: ComponentFixture<ListNivCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNivCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNivCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
