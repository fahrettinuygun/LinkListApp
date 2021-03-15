import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLinkScreenComponent } from './pages/add-link-screen/add-link-screen.component';
import { ListScreenComponent } from './pages/list-screen/list-screen.component';


const routes: Routes = [
  {path: '', component:ListScreenComponent},
  {path: 'List', component:ListScreenComponent},
  {path: 'AddLink', component:AddLinkScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
