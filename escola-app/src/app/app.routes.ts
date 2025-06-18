import { Routes } from '@angular/router';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { EditorDeDisciplinasComponent } from './editor-de-disciplinas/editor-de-disciplinas.component';

export const routes: Routes = [
    {
        path: 'disciplinas',
        component: ListaDeDisciplinasComponent
    },
    {
        path: 'disciplinas/:id',
        component: EditorDeDisciplinasComponent
    },
];
