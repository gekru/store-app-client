import { FormGroup } from '@angular/forms';
import { ConstantNames } from 'src/app/constants/constant-names';

export function getEmailErrorMessage(formGroup: FormGroup) {

    let emailField = formGroup.get(ConstantNames.email);

    if (emailField.hasError(ConstantNames.required)) {
        return 'Please enter an email address';
    }

    if (emailField.hasError(ConstantNames.email)) {
        return 'Not a valid email';
    }
};

export function getPasswordErrorMessage(formGroup: FormGroup) {

    let passwordField = formGroup.get(ConstantNames.password);

    if (passwordField.hasError(ConstantNames.required)) {
        return 'Please enter a password';
    }

    if (passwordField.hasError('minlength')) {
        return 'The password you provided must have at least 6 characters';
    }
};

export function getConfirmPasswordErrorMessage(formGroup: FormGroup) {

    let confirnPasswordField = formGroup.get(ConstantNames.confirmPassword);

    if (confirnPasswordField.hasError(ConstantNames.required)) {
        return 'Please confirm Your password';
    }

    if (confirnPasswordField.hasError('notMatch')) {
        return 'Passwords must match';
    }
};