import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {SinglePostComponent} from './components/single-post/single-post.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {LoginComponent} from './components/login/login.component';
import {AdminMainMenuComponent} from './components/admin/admin-main-menu/admin-main-menu.component';


const routes: Routes = [
  {
    path: '', component: MainMenuComponent, children: [
      {path: '', component: HomePageComponent},
      {path: 'post', component: SinglePostComponent}
    ]
  },
  {path: 'admin-login', component: LoginComponent},
  {path: 'app', component: AdminMainMenuComponent, children: [
      {path: '', component: AdminMainMenuComponent}
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
