import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule, MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {routes} from './app-routing.module';
import {ApiService} from './api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {AuthInterceptor} from './auth.interceptor';
import {ProfileMenuComponent} from './profile-menu/profile-menu.component';
import {AuthService} from './services/auth.service';
import {EchoService} from './services/echo.service';
import {UploadingFilesModule} from './uploading-files/uploading-files.module';
import { UploadingFilesDataService } from './uploading-files/uploading-files-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfileMenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,

    UploadingFilesModule,
  ],
  providers: [
    ApiService,

    AuthService,
    EchoService,
    UploadingFilesDataService,
    TokenStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
