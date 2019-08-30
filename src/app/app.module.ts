import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LoginComponent } from './components/login/login.component';
import { AdminMainMenuComponent } from './components/admin/admin-main-menu/admin-main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SinglePostComponent,
    MainMenuComponent,
    LoginComponent,
    AdminMainMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
