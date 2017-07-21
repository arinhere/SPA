import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    templateUrl:'./login.template.html'
})

export class loginComponent{

    notify_error=false;
    notify_success=false;
    message="";
    private url="http://www.bhasco.com/SPA/ServerApi.php";
    //private url="ServerApi.php";
    form: FormGroup;

    constructor(private fb: FormBuilder,private _http: Http, private _route: Router){
        this.createForm();
    }

    createForm(){
        this.form=this.fb.group({
            fname: ["",Validators.required],
            pw: ["",Validators.required]
        });
    }

    get fname(){
        return this.form.get("fname");
    }

    get pw(){
        return this.form.get("pw");
    }

    onSubmit(){
        let postData=this.form.value;
        var response_status;

        this._http.post(this.url,JSON.stringify(postData))
            .subscribe(response=>{
                console.log(response["_body"]);
                if(response["_body"] as string ==='"success"'){
                    sessionStorage.setItem("user", postData.fname as string);
                    window.location.href="posts";
                }else{
                    this.notify_error=true;
                    this.message="Invalid Login Details";
                }
            });
    }
}