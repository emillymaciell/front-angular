import { Component } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { FormsModule } from '@angular/forms';
import { EditorDeDisciplinasComponent } from './editor-de-disciplinas/editor-de-disciplinas.component'; // NOVO
import { DisciplinasService } from './disciplinas.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDeDisciplinasComponent, CommonModule, FormsModule, EditorDeDisciplinasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selecionado: Disciplina | null = null;
  nome: string | null = "";
  descricao: string | null = "";
  editando: Disciplina = new Disciplina(0, "", "");
  disciplinas: Array<Disciplina>;

  constructor(private disciplinasService: DisciplinasService) {
    this.disciplinas = this.disciplinasService.todas();
  }

  selecionar(disciplina: Disciplina) {
    if (this.selecionado === disciplina) {
      this.selecionado = null;
    } else {
      this.selecionado = disciplina;
    }
  }

  salvar() {
    try {
      const saveDisciplina = this.disciplinasService.salvar(this.editando?.id, this.editando?.nome, this.editando?.descricao);
      this.editando = new Disciplina(0, "", "");
    } catch (e) {
    }
  }

  excluir(disciplina: Disciplina) {
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando')
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina ' + disciplina.nome + '?')) {
      }
      try {
        this.disciplinasService.excluir(disciplina);
      } catch (e) {
        console.log(e)
      }
    }
  }

  editar(disciplina: Disciplina) {
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao;
    this.editando = disciplina;
  }

  cancelar() {
    this.nome = "";
    this.descricao = "";
    this.editando = new Disciplina(0, '', '');
  }
}
