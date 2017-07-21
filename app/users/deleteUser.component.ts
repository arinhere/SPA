import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule,Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    template: `
        <div class="panel panel-default col-md-6">
            
            <div class="panel-body">
                <div *ngIf="notify" class="alert alert-success">{{ message }}</div>

                <div style="clear: both">Are you sure you want to delete this user?</div>

                <div style="padding-top: 10px;">
                    <button class="btn btn-primary" (click)="deleteUser()">Delete</button>
                    &nbsp;
                    <button class="btn btn-primary" (click)="back2Users()">Back to Users</button>
                </div>
            </div>
        </div>
    `
})

export class deleteUserComponent implements OnInit {
    form: FormGroup;
    url="";
    notify=false;
    message;
    usrid;

    constructor(
        private _http: Http,
        private fb: FormBuilder,
        private _router: ActivatedRoute,
        private route: Router
    ){ }

    ngOnInit(){
        let subscription= this._router.params.subscribe(param => {
            this.usrid = + param['id'];
        })

        subscription.unsubscribe();

        this.url= "https://jsonplaceholder.typicode.com/users/"+this.usrid;
    }

    deleteUser(){
        this._http.delete(this.url)
            .subscribe(response=>{
                this.notify=true;
                this.message="Server Response: " + response;
            });
    }

    back2Users(){
        this.route.navigate(["/users"]);
    }

}