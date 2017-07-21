import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';

export class customValidators{
    static nospace(control: AbstractControl){
        if((control.value as string).indexOf(' ') > 0)
            return {nospace: true};
        
        return null;
    }

    static comparepass(control: AbstractControl){
        let newpass=control.get('newPassword');
        let confpass=control.get('confPassword');
        
        if(newpass.value == "" || confpass.value==""){
            //Do Nothing
        }
        else{
            if(newpass.value!==confpass.value)
                return {comparepass: true};
        }

        return null;
    }
}