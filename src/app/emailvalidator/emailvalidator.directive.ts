import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[digiplusAppEmailvalidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailvalidatorDirective,
    multi: true,
  },],
})
export class EmailvalidatorDirective implements Validator {

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if(value.includes('test')) {
      return {
        invalideEmail: true
      }
    }
    return null;
  }

}
