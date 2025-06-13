import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Disciplina } from '../disciplina.model';

@Component({
  selector: 'app-editor-de-disciplinas',
  imports: [FormsModule],
  templateUrl: './editor-de-disciplinas.component.html',
  styleUrl: './editor-de-disciplinas.component.css'
})
export class EditorDeDisciplinasComponent {

  @Input()
  nome: string | null = "";

  @Input()
  descricao: string | null = "";

  @Input()
  disciplinas = [new Disciplina(" ", " ")];

  @Input()
  editando: Disciplina | null = null;

  @Output()
  onSalvar = new EventEmitter<{ nome: string, descricao: string }>();

  @Output()
  onCancelar = new EventEmitter<void>();

  @Output()
  onEditar = new EventEmitter<Disciplina>();


  constructor() {
  }

  ngOnInit() {
  }

  salvar() {
    this.onSalvar.emit({ nome: this.nome || '', descricao: this.descricao || "" });
  }

  cancelar() {
    this.onCancelar.emit();
  }

  editar(disciplina: Disciplina) {
    this.onEditar.emit(disciplina);
  }
}
