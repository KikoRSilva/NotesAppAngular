import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', component: NotesListComponent },
    /** path: 'new' must be above ':id' path
     * Angular resolves routes from top to bottom
     * If the ':id' route is above the 'new' route and a request is make to '/new'
     * Angular will match the ':id' route and treat the 'new' as the id parameter
    */
    { path: 'new', component: NoteDetailsComponent},
    { path: ':id', component: NoteDetailsComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
