import { Component } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { FormsModule } from '@angular/forms';
import { EditorDeDisciplinasComponent } from './editor-de-disciplinas/editor-de-disciplinas.component'; // NOVO

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDeDisciplinasComponent, CommonModule, FormsModule, EditorDeDisciplinasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selecionado: Disciplina | null = null;
  nome: string = "";
  descricao: string = "";
  editando: Disciplina | null = null;
  disciplinas = [
    new Disciplina(
      'Língua Portuguesa',
      'Estudo da gramática, interpretação de textos e das obras da literatura.'
    ),
    new Disciplina(
      'Arte',
      'Exploração das diversas manifestações artísticas (visuais, cênicas, musicais) e sua relevância cultural.'
    ),
    new Disciplina(
      'Educação Física',
      'Promoção da saúde através de práticas corporais, jogos e desenvolvimento de habilidades motoras.'
    ),
    new Disciplina(
      'Matemática',
      'Desenvolvimento do raciocínio lógico-abstrato, com estudo de números, álgebra e geometria.'
    ),
    new Disciplina(
      'História',
      'Análise crítica de eventos e sociedades do passado para a compreensão do presente.'
    ),
    new Disciplina(
      'Geografia',
      'Estudo da organização do espaço, da interação entre sociedade e natureza e das dinâmicas populacionais.'
    ),
    new Disciplina(
      'Ciências',
      'Investigação dos fenômenos naturais, abrangendo os seres vivos, a matéria, a energia e o planeta Terra.'
    ),
    new Disciplina(
      'Redação',
      'Desenvolvimento da capacidade de produzir textos coesos e coerentes em diversos gêneros.'
    ),
    new Disciplina(
      'Língua Estrangeira Moderna-Inglês',
      'Desenvolvimento das competências comunicativas (leitura, escrita, audição e fala) em língua inglesa.'
    ),
    new Disciplina(
      'Ensino Religioso',
      'Reflexão sobre as tradições religiosas e o respeito à diversidade de crenças e valores éticos.'
    ),
  ];

  selecionar(disciplina: Disciplina) {
    if (this.selecionado === disciplina) {
      this.selecionado = null;
    } else {
      this.selecionado = disciplina;
    }
  }

  salvar(payload: { nome: string, descricao: string }) {
    if (this.editando) {
      this.editando.nome = payload.nome;
      this.editando.descricao = payload.descricao;
    } else {
      const d = new Disciplina(payload.nome, payload.descricao);
      this.disciplinas.push(d);
    }
    this.nome = payload.nome;
    this.descricao = payload.descricao;
    this.cancelar();
  }

  excluir(disciplina: Disciplina) {
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando')
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina ' + disciplina.nome + '?')) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
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
    this.editando = null;
  }
}
