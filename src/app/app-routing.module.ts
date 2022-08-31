import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './components/answer/answer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = 
[  { path: '', pathMatch: 'full', redirectTo: 'form/builder'},
{
  path: 'form/builder',
  component: HomeComponent
},
{
  path: 'form/answers',
  component: AnswerComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
