import { edituserComponent } from './editUser.component';
import { deleteUserComponent } from './deleteUser.component';
import { Router, RouterModule } from '@angular/router'

import { usersComponent } from './users.component';
import { changePassword } from './changePass.component';
import { adduserComponent } from './adduser.component';


export const usersRouting=RouterModule.forChild([
    {path: 'users', component: usersComponent },
    {path: 'adduser', component: adduserComponent},
    {path: 'changepass', component: changePassword},
    {path: 'edituser/:id', component: edituserComponent},
    {path: 'deleteuser/:id', component: deleteUserComponent}
])