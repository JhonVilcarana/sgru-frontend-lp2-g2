import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInstrumentoComponent } from './list-instrumento.component';

describe('ListInstrumentoComponent', () => {
  let component: ListInstrumentoComponent;
  let fixture: ComponentFixture<ListInstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInstrumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
