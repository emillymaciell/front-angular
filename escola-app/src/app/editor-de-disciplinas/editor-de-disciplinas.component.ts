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
  id: number = 0

  @Input()
  disciplinas = [new Disciplina(0, " ", " ")];

  @Input()
  editando: Disciplina | null = null;

  @Output()
  onSalvar = new EventEmitter<Disciplina>();

  @Output()
  onCancelar = new EventEmitter<Disciplina>();

  @Output()
  onEditar = new EventEmitter<Disciplina>();


  constructor() {
  }

  ngOnInit() {
  }

  salvar() {
    const novaDisciplina = new Disciplina(this.id, this.nome || '', this.descricao || '');
    this.onSalvar.emit(novaDisciplina);
  }

  cancelar() {
    this.onCancelar.emit();
  }

  editar(disciplina: Disciplina) {
    this.onEditar.emit(disciplina);
  }
}
