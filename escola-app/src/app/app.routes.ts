import { Routes } from '@angular/router';
import { ListaDeDisciplinasComponent } from './lista-de-disciplinas/lista-de-disciplinas.component';
import { EditorDeDisciplinasComponent } from './editor-de-disciplinas/editor-de-disciplinas.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'disciplinas',
        component: ListaDeDisciplinasComponent
    },
    {
        path: 'disciplinas/nova',
        component: EditorDeDisciplinasComponent
    },
    {
        path: 'disciplinas/:id',
        component: EditorDeDisciplinasComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
