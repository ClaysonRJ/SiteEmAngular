import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  mostrarAbout: boolean = false;
  listaAbout: String []= [
    "Agendamento de visita técnica online",
    "Solicitação de orçamento online",
    "Chat Bot 24 horas",
    "Trabalhamos com as melhores marcas do mercado"
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  onMostrarAbout(){
    this.mostrarAbout = !this.mostrarAbout;
  }
}
