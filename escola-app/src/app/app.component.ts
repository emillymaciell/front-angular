import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDeDisciplinasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'escola-app';
}
