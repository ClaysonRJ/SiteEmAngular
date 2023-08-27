import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoesComponent } from './servicoes.component';

describe('ServicoesComponent', () => {
  let component: ServicoesComponent;
  let fixture: ComponentFixture<ServicoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
