export class ConstantNames {
    public static readonly email: string = 'email';
    public static readonly password: string = 'password';
    public static readonly confirmPassword: string = 'confirmPassword';
    public static readonly required: string = 'required';
    public static readonly firstName: string = 'firstName';
    public static readonly lastName: string = 'lastName';
    public static readonly token: string = 'token';

    public static readonly passwordRegExp: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w])/;
}