import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';


export const routes: Routes = [
    { path: '', component: MainComponent, pathMatch: 'prefix'},
    { path: 'data', component: AboutComponent},
    { path: '**', redirectTo: ''},
    // { path: '', redirectTo: 'main', pathMatch: 'prefix' },
];
