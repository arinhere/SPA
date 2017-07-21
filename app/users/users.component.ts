import { Http, HttpModule } from '@angular/http';
import { userServices } from './users.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/timeout';
import { Router } from '@angular/router';

@Component({
    templateUrl: "./users.component.html",
    providers: [userServices, HttpModule ]
})

export class usersComponent implements OnInit{
    userList=[];
    isLoading=true;
    isAdmin=false;

    constructor(private _userService: userServices, private _router: Router){ }

    ngOnInit(){
        if(sessionStorage.getItem("user")!=null){
            this.isAdmin=true;
        }
        this._userService.getUsers()
        .subscribe(result=>{
           this.userList=result;
           this.isLoading=false;
        });
    }

    onClick(){
        this._router.navigate(["adduser"]);
    }
}