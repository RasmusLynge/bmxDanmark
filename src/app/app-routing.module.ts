import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Video2021Component } from './pages/video2021/video2021.component';
import { Video2020Component } from './pages/video2020/video2020.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'VVK2021', component: Video2021Component },
  { path: 'VVK2020', component: Video2020Component },
  { path: 'arkiv', component: ArchiveComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: '**', component: FrontPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
