export interface IUserUpdatePassword {
    userName: string,
    email: string;
    password?: string;
    code?: string;
    newPassword: string;
}
