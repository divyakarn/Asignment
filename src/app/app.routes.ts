import { Routes } from '@angular/router';
import { SeekerComponent } from './Components/seeker/seeker.component';
import { PosterComponent } from './Components/poster/poster.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: 'seeker', component: SeekerComponent },
  { path: 'poster', component: PosterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
