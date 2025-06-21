import { Routes } from '@angular/router';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { EditorDeDisciplinasComponent } from './editor-de-disciplinas/editor-de-disciplinas.component';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'disciplinas',
        component: ListaDeDisciplinasComponent
    },
    {
        path: 'disciplinas/:id',
        component: EditorDeDisciplinasComponent
    },
];
