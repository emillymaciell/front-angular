import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DisciplinasService } from '../disciplinas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor-de-disciplinas',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './editor-de-disciplinas.component.html',
  styleUrls: ['./editor-de-disciplinas.component.css']
})
export class EditorDeDisciplinasComponent implements OnInit {
  nome: string = "";
  descricao: string = "";

  editandoId: any | null = null;
  tituloDaPagina: string = "Nova Disciplina";

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private disciplinasService = inject(DisciplinasService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'nova') {
      this.editandoId = id;
      this.tituloDaPagina = "Editar Disciplina";
      this.disciplinasService.encontrarPorId(id).subscribe(disciplina => {
        this.nome = disciplina.nome;
        this.descricao = disciplina.descricao || '';
      });
    }
  }

  salvar(): void {
    if (!this.nome) {
      alert('O nome da disciplina é obrigatório!');
      return;
    }

    const disciplinaPayload = { nome: this.nome, descricao: this.descricao };

    if (this.editandoId) {
      this.disciplinasService.atualizar(this.editandoId, disciplinaPayload).subscribe(() => {
        this.router.navigate(['/disciplinas']);
      });
    } else {
      this.disciplinasService.salvar(disciplinaPayload).subscribe(() => {
        this.router.navigate(['/disciplinas']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/disciplinas']);
  }
}
