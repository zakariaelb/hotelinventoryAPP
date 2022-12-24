import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidators {
    static validateName(control: AbstractControl) {
        const value = control.value as string;
        if (value.includes('test')) {
            return {
                validateName: {
                    invalidName: true
                }
            }
        }
        return null;

    }

    static validSpecailChar(char: string) {
        return (control: AbstractControl) => {

             const value = control.value as string;
        if (value.includes(char)) {
            return { 
                invalidSpecialChar: true 
            };
        }
        return null;
    }
    }
    
    static validateDate(control: FormGroup) {
        const checkInDate: any = new Date(control.get('checkInDate')?.value);
        const checkOutDate: any = new Date(control.get('checkOutDate')?.value);
        // const date1 = new Date('11-jan-2022');
        // const date2 = new Date('14-jan-2022');
        // const diffTime = Math.abs( checkOutDate - checkInDate );
        const diffTime = checkOutDate - checkInDate;
        const diffDate = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDate);       
        console.log(diffTime);       
        // if( checkInDate > checkOutDate)
        if( diffDate <= 0 ) {
            control.get('checkOutDate')?.setErrors({
                invalidDate: true,
            })
            invalidDate: true    
        };
           
        return null;    
    }
   
}