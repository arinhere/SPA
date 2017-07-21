import { Router, RouterModule } from '@angular/router';
import { postComponent } from './posts.component';

export const postsRouting=RouterModule.forChild([
    { path: 'posts', component: postComponent }
])