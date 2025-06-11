import { Component } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDeDisciplinasComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selecionado = null;
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

  selecionar(disciplina: Disciplina){
    this.selecionado = disciplina; //dando erro!
  }
}
