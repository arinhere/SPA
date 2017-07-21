import { customValidators } from '../customValidators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    templateUrl: "./changePassword.template.html"
})

export class changePassword{
    form: FormGroup;

    constructor(private fb: FormBuilder){
        this.createForm();
    }

    createForm(){
        this.form=this.fb.group({
            newPassword: ['',Validators.compose([Validators.required, Validators.minLength(5)])],
            confPassword: ['', Validators.required]
        },
        {
           validator: customValidators.comparepass
        })
    }

    SubmitForm(){
        console.log(this.form.value);
    }

}