import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'tabajara',
    redirectTo: 'folder/Outbox',
    pathMatch: 'full'
  },
  {
    path: 'curintia',
    redirectTo: 'folder/Trash',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./pages/contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'escolhas',
    loadChildren: () => import('./pages/escolhas/escolhas.module').then( m => m.EscolhasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
