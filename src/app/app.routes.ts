import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';


export const routes: Routes = [
    { path: '', component: MainComponent},
    { path: 'data', component: AboutComponent},
    { path: '**', component: MainComponent},
    { path: '', redirectTo: 'main', pathMatch: 'prefix' },
];
