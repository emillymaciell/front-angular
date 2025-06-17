import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  private disciplinas: Array<Disciplina> | null = null;
  private id: number = 4;

  constructor() {
    this.disciplinas = [
      new Disciplina(1,
        'Língua Portuguesa',
        'Estudo da gramática, interpretação de textos e das obras da literatura.'
      ),
      new Disciplina(2,
        'Matemática',
        'Desenvolvimento do raciocínio lógico-abstrato, com estudo de números, álgebra e geometria.'
      ),
      new Disciplina(3,
        'Língua Estrangeira Moderna-Inglês',
        'Desenvolvimento das competências comunicativas (leitura, escrita, audição e fala) em língua inglesa.'
      ),
    ];
  }

  todas(): Array<Disciplina> {
    return this.disciplinas ?? [];
  }

  salvar(id: number, nome: string | null, descricao: string | null): Disciplina {
    if (id) {
      let editDisciplina = this.encontrar(id);
      if (editDisciplina) {
        editDisciplina.nome = nome;
        editDisciplina.descricao = descricao;
      } else {
        throw new Error('Não foi possível encontrar a disciplina');
      }
      return editDisciplina;
    } else {
      const createDisciplina = new Disciplina(this.id, nome, descricao);
      this.disciplinas?.push(createDisciplina);
      this.id++;
      return createDisciplina;
    }
  }

  excluir(disciplina: number | Disciplina) {
    let isDisciplinaId = null;
    if (typeof (disciplina) == 'number') {
      isDisciplinaId = this.encontrar(disciplina);
    } else {
      isDisciplinaId = this.encontrar(disciplina.id)
    }
    if (isDisciplinaId != null) {
      const disciplinaId = this.disciplinas?.indexOf(isDisciplinaId);
      if (disciplinaId != undefined) {
        this.disciplinas?.splice(disciplinaId, 1);
      }
    } else {
      throw new Error('Não foi possível encontrar a disciplina');
    }
  }

  encontrar(params: number | string) {
    let isDisciplina = null;
    if (typeof (params) === 'number') {
      isDisciplina = this.disciplinas?.filter(isDisciplina => isDisciplina.id === params);
    } else {
      isDisciplina = this.disciplinas?.filter(isDisciplina => isDisciplina.nome === params);
    }
    if (isDisciplina != null && isDisciplina.length > 0) {
      return isDisciplina[0];
    } else {
      return null;
    }
  }
}
