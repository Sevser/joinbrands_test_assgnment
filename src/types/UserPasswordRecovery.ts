import { IUserRegister } from '@/interfaces/IUserRegister';
import { createCode } from '@/utills';

export default class UserPasswordRecovery implements IUserRegister {
  public activated?: boolean | undefined;

  public email: string;

  public id?: number;

  public password: string;

  public userName: string;

  public resetPasswordCode: string;

  public registerCode: string;

  constructor(user: IUserRegister & { registerCode: string }) {
    this.email = user.email;
    this.password = user.password;
    this.userName = user.userName;
    this.activated = user.activated;
    this.resetPasswordCode = createCode();
    this.registerCode = user.registerCode;
    this.id = user.id;
  }
}
