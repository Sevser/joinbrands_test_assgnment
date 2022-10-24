import { IUserRegister } from '@/interfaces/IUserRegister';
import { createCode } from '@/utills';
import { sha256 } from 'js-sha256';

export default class UserRegister implements IUserRegister {
  public activated?: boolean | undefined;

  public email: string;

  public password: string;

  public registerCode?: string | undefined;

  public userName: string;

  constructor(user: IUserRegister) {
    this.email = user.email;
    this.password = sha256(user.password.concat(process.env.VUE_APP_SALT));
    this.userName = user.userName;
    if (user.activated !== undefined) {
      this.activated = user.activated;
    } else {
      this.activated = true;
    }
    if (user.registerCode !== undefined) {
      this.registerCode = user.registerCode;
    } else {
      this.registerCode = createCode();
    }
  }
}
