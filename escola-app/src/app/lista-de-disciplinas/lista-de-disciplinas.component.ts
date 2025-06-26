import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DisciplinasService } from '../disciplinas.service';
import { Disciplina } from '../disciplina.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-de-disciplinas',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista-de-disciplinas.component.html',
  styleUrls: ['./lista-de-disciplinas.component.css']
})
export class ListaDeDisciplinasComponent implements OnInit {

  public disciplinas: Disciplina[] = [];
  public disciplinaSelecionada: Disciplina | null = null;

  private disciplinasService = inject(DisciplinasService);

  ngOnInit() {
    this.carregarDisciplinas();
  }

  carregarDisciplinas() {
    this.disciplinasService.todas().subscribe(dados => {
      this.disciplinas = dados;
    });
  }

  excluir(disciplina: Disciplina) {
    if (confirm(`Tem certeza que deseja excluir "${disciplina.nome}"?`)) {
      this.disciplinasService.excluir(disciplina.id).subscribe(() => {
        this.carregarDisciplinas();
      });
    }
  }

  ordenarPorNome() {
    this.disciplinas.sort((a, b) => a.nome.localeCompare(b.nome));
  }

  selecionarDisciplina(disciplina: Disciplina) {
    if (this.disciplinaSelecionada === disciplina) {
      this.disciplinaSelecionada = null;
    } else {
      this.disciplinaSelecionada = disciplina;
    }
  }
}