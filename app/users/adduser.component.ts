import { usersComponent } from './users.component';
import { Http } from '@angular/http';
import { customValidators } from '../customValidators';
import { FormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Component({
    templateUrl: './addUser.component.html'
})

export class adduserComponent {
    private _url = "https://jsonplaceholder.typicode.com/users";
    //private _url = "ServerApi.php";
    notify= false;
    message="";
    form: FormGroup;

    constructor(private fb: FormBuilder, private _http: Http){
        this.createform();
    }
    
    createform(){
        this.form=this.fb.group({
            fname: ["",Validators.compose([Validators.required, Validators.minLength(3),customValidators.nospace])],
            mail: ["",Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")])],
            phone: ["",Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
            street: [""],
            suite: [""],
            city: ["",Validators.required],
            zipcode: ["", Validators.required]
        });
    }    
    
    get fname(){
        return this.form.get('fname');
    }

    onSubmit(){
        let postData=this.form.value;
        
        this._http.post(this._url,JSON.stringify(postData))
            .subscribe(response=>{
                this.notify=true;
                this.message="Data added successfully. New User ID: " + response.json().id;
            })
    }
}