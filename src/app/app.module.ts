import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { VideoDialogComponent } from './video-dialog/video-dialog.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { Video2020Component } from './pages/video2020/video2020.component';
import { Video2021Component } from './pages/video2021/video2021.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VideoListComponent } from './video-list/video-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoDialogComponent,
    NotFoundComponent,
    FrontPageComponent,
    Video2020Component,
    Video2021Component,
    ArchiveComponent,
    ContactComponent,
    VideoListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
