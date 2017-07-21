import { Http } from '@angular/http';
import { customValidators } from '../customValidators';
import { FormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
    templateUrl: './editUser.template.html'
})

export class edituserComponent implements OnInit, OnDestroy{
    private _url;
    notify= false;
    message="";
    subscription;
    userid;
    user=<any>{ address:{} };
    form: FormGroup;

    constructor(private fb: FormBuilder, private _http: Http, private _route: ActivatedRoute){ 
        this.createform(); 
    }

    ngOnInit(){
        this.subscription=this._route.params.subscribe(param=>{
            this.userid=+param['id'];
            this._url = "https://jsonplaceholder.typicode.com/users/"+this.userid;
        });   

        this._http.get(this._url).subscribe(response=>{
            this.user=response.json();
        })  
    }

    ngOnDestroy(){
        //this.subscription.un
    }

    createform(){
        this.form=this.fb.group({
                username: [ '' ,Validators.compose([Validators.required, Validators.minLength(3)])],
                mail: [ '' ,Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")])],
                phone: [ ' ' ,Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
                street: [''],
                suite: [' '],
                city: [' ',Validators.required],
                zipcode: [' ' , Validators.required]
            });
    }    
    
    get username(){
        return this.form.get('username');
    }

    onSubmit(){
        let postData = this.form.value;
        this._http.put(this._url, JSON.stringify(postData))
            .subscribe(response=>{
                this.notify=true;
                this.message="Server Response: " + response;
                //console.log(response + " //// "+response.json().status ); 
            });
    }
}