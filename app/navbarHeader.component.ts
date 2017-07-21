import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'navbarHeader',
    templateUrl: './navbar.component.html'
})

export class NavbarHeaderComponent{
    showLogout;    
    
    constructor(private _router: Router){
        //console.log(sessionStorage.getItem("user"));
        if(sessionStorage.getItem("user")===null){
            this.showLogout=false;
        }
        else{
            this.showLogout=true;
        }
    }

    logOut(){
        sessionStorage.removeItem("user");
        this._router.navigate(["home"]);
    }
    
}