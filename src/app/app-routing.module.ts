import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {SinglePostComponent} from './components/single-post/single-post.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {LoginComponent} from './components/login/login.component';
import {AdminMainMenuComponent} from './components/admin/admin-main-menu/admin-main-menu.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {CreateAPostComponent} from './components/admin/create-a-post/create-a-post.component';
import {SettingsComponent} from './components/admin/settings/settings.component';
import {FormUploadComponent} from './components/admin/form-upload/form-upload.component';


const routes: Routes = [
  {
    path: '', component: MainMenuComponent, children: [
      {path: '', component: HomePageComponent},
      {path: ':permalink', component: SinglePostComponent}
    ]
  },
  {path: 'admin/login', component: LoginComponent},
  {path: 'admin', component: AdminMainMenuComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'create-a-post', component: CreateAPostComponent},
      {path: 'upload', component: FormUploadComponent},
      {path: '**', redirectTo: 'dashboard'}
    ]
  },
  {path: 'login', component: LoginComponent}
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
