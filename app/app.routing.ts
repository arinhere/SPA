import { Router, RouterModule } from '@angular/router'

import { loginComponent } from './login.component';
import { HomeComponent } from './home.component';


export const routing=RouterModule.forRoot([
    {path: 'home', component: HomeComponent },
    {path: 'login', component: loginComponent },
    {path: '**', redirectTo: "home" }
])