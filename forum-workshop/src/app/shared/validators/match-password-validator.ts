import { FormGroup, ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(passOneValue:string, passTwoValue: string): ValidatorFn {

    return (control) => {
        const group = control as FormGroup;
        const pass1 = group.get(passOneValue);
        const pass2 = group.get(passTwoValue);

        return pass1?.value === pass2?.value
        ? null
        : {matchPasswordsValidator: true}

    }
}