import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteListComponent } from '../app/note-list/note-list.component';

import { NoteEditComponent } from './note-edit/note-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/note-list', pathMatch: 'full' },
  {
    path: 'note-list',
    component: NoteListComponent
  },
  {
    path: 'note-add',
    component: NoteEditComponent
  },
  {
    path: 'note-edit/:id',
    component: NoteEditComponent
  },
  {
    path: 'note-delete/:id',
    component: NoteEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
