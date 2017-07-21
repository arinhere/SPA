import { Http, HttpModule } from '@angular/http';
import { usersComponent } from './users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './navbarHeader.component';
import { HomeComponent } from './home.component';
import { postComponent } from './posts/posts.component';
import { adduserComponent } from './users/adduser.component';
import { changePassword } from './users/changePass.component';
import { edituserComponent } from './users/editUser.component';
import { deleteUserComponent } from './users/deleteUser.component';
import { loginComponent } from './login.component';

//Services
import { postsService } from './posts/posts.service';
import { userServices } from './users/users.service';

//Routing
import { postsRouting } from './posts/posts.routing';
import { usersRouting } from './users/users.routing';
import { routing } from './app.routing';

@NgModule({
   imports: [
    BrowserModule, HttpModule, 
    usersRouting, postsRouting, routing, 
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    AppComponent, NavbarHeaderComponent, HomeComponent,
    postComponent, usersComponent, adduserComponent, 
    changePassword, edituserComponent, deleteUserComponent,
    postComponent, loginComponent
  ], 
  providers: [userServices, postsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
