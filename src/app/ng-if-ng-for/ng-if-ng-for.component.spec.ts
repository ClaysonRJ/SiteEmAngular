import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIFNgForComponent } from './ng-if-ng-for.component';

describe('NgIFNgForComponent', () => {
  let component: NgIFNgForComponent;
  let fixture: ComponentFixture<NgIFNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIFNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIFNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
