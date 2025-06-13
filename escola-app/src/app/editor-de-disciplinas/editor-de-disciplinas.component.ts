import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor-de-disciplinas',
  imports: [CommonModule],
  templateUrl: './editor-de-disciplinas.component.html',
  styleUrl: './editor-de-disciplinas.component.css'
})
export class EditorDeDisciplinasComponent {

  @Input()
  nome: string | null= null;



}
