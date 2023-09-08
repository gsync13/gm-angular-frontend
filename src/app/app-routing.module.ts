import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' }, //verifica o path inteiro
  {
    path: 'courses', //nome do path
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) //roda de layz loading colocando o nome do arquivo do modulo
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
