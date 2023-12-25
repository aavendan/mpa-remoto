import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';


export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent},
    { path: 'data', component: AboutComponent},
    { path: '**', redirectTo: 'main' }
];
