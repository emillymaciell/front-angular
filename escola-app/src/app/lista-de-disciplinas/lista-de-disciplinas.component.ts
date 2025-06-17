import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Disciplina } from '../disciplina.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-de-disciplinas',
  imports: [CommonModule],
  templateUrl: './lista-de-disciplinas.component.html',
  styleUrl: './lista-de-disciplinas.component.css'
})

export class ListaDeDisciplinasComponent {
  @Input()
  disciplinas = [new Disciplina(0, "", "")];

  @Input()
  editando: Disciplina | null = null;

  @Input()
  selecionado: null | Disciplina = null;

  @Output()
  onEditar = new EventEmitter<Disciplina>();

  @Output()
  onExcluir = new EventEmitter<Disciplina>();

  @Output()
  onSelecionar = new EventEmitter<Disciplina>();

  constructor() {
  }

  ngOnInit() {
  }

  excluir(disciplina: Disciplina) {
    this.onExcluir.emit(disciplina);
  }

  editar(disciplina: Disciplina) {
    this.onEditar.emit(disciplina);
  }

  selecionar(disciplina: Disciplina) {
    this.onSelecionar.emit(disciplina);
  }

}
