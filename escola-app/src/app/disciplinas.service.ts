import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disciplina } from './disciplina.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisciplinasService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/disciplinas';

  todas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.API_URL);
  }

  encontrarPorId(id: string): Observable<Disciplina> {
    return this.http.get<Disciplina>(`${this.API_URL}/${id}`);
  }

  salvar(disciplina: Omit<Disciplina, 'id'>): Observable<Disciplina> {
    return this.http.post<Disciplina>(this.API_URL, disciplina);
  }

  atualizar(id: any, disciplina: Partial<Disciplina>): Observable<Disciplina> {
    return this.http.patch<Disciplina>(`${this.API_URL}/${id}`, disciplina);
  }

  excluir(id: any): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
