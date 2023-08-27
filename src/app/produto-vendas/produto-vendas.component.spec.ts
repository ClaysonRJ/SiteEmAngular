import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoVendasComponent } from './produto-vendas.component';

describe('ProdutoVendasComponent', () => {
  let component: ProdutoVendasComponent;
  let fixture: ComponentFixture<ProdutoVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
