import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from '../todo/todo.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: 'todos', component: TodoComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
