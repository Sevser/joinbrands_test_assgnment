import { IUserRegister } from '@/interfaces/IUserRegister';
import { createCode } from '@/utills';

export default class UserRegister implements IUserRegister {
  public activated?: boolean | undefined;

  public email: string;

  public password: string;

  public registerCode?: string | undefined;

  public userName: string;

  constructor(user: IUserRegister) {
    this.email = user.email;
    this.password = user.password;
    this.userName = user.userName;
    if (user.activated !== undefined) {
      this.activated = user.activated;
    } else {
      this.activated = false;
    }
    if (user.registerCode !== undefined) {
      this.registerCode = user.registerCode;
    } else {
      this.registerCode = createCode();
    }
  }
}
