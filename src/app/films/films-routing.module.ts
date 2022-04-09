import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [{
  path: '',
  children:[
    {
      path: 'list',
      component: ListComponent
    },
    {
      path: 'characters/:id',
      component: CharactersComponent
    },
    {
      path: '**',
      redirectTo: 'list'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
