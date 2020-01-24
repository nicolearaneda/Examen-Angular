/*import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidaContra]',
  providers: [{provide: NG_VALIDATORS,
  useExisting:ValidaContraDirective,multi:
true}]
})
export class ValidaContraDirective implements
Validator{
  //implementar metodo abstracto
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    throw new Error("Method not implemented.");
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  const contra = <string>control.value; //control: es como se llame el input
  }

  constructor() { }

}*/
