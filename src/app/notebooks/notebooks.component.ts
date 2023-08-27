import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.css']
})
export class NotebooksComponent implements OnInit {
  public produtosLista: Produto[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtosService.getAll().subscribe((produtos: Produto[])=>{
      this.produtosLista = produtos;
    });
  }

}
