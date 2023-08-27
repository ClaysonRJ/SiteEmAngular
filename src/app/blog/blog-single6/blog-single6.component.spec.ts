import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingle6Component } from './blog-single6.component';

describe('BlogSingle6Component', () => {
  let component: BlogSingle6Component;
  let fixture: ComponentFixture<BlogSingle6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSingle6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingle6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
