import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLogroComponent } from './list-logro.component';

describe('ListLogroComponent', () => {
  let component: ListLogroComponent;
  let fixture: ComponentFixture<ListLogroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLogroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLogroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
