import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingle3Component } from './blog-single3.component';

describe('BlogSingle3Component', () => {
  let component: BlogSingle3Component;
  let fixture: ComponentFixture<BlogSingle3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSingle3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
