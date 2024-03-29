import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LoginComponent } from './components/login/login.component';
import { AdminMainMenuComponent } from './components/admin/admin-main-menu/admin-main-menu.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CreateAPostComponent } from './components/admin/create-a-post/create-a-post.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ng6-toastr-notifications';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { FormUploadComponent } from './components/admin/form-upload/form-upload.component';
import {UploadFileService} from './core/service/upload-file.service';
import {AdminPostService} from './core/service/admin-post.service';
import {AlertService} from './core/service/alert.service';
import {DetailService} from './core/service/detail.service';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from './core/service/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SinglePostComponent,
    MainMenuComponent,
    LoginComponent,
    AdminMainMenuComponent,
    DashboardComponent,
    CreateAPostComponent,
    SettingsComponent,
    FormUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    UploadFileService,
    AdminPostService,
    AlertService,
    DetailService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
