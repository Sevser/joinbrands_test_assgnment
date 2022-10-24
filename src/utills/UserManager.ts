import { IUserControllerResult } from '@/interfaces/IUserControllerResult';
import { IUserLogin } from '@/interfaces/IUserLogin';
import { IUserProfile } from '@/interfaces/IUserProfile';
import userController from './UserController';

class User implements IUserProfile {
  public email: string;

  public userName: string;

  constructor(user: IUserProfile) {
    this.userName = user.userName;
    this.email = user.email;
  }
}

class UserManager {
  public user: any;

  constructor() {
    this.user = null;
  }

  async changePassword({ newPassword, code }: { newPassword?: string, code?: string }): Promise<IUserControllerResult> {
    console.log('login', this.user);
    const result = await userController.updatePassword({
      ...this.user,
      newPassword,
    });
    if (result.result && result.data.userInfo !== undefined) {
      this.user = new User(result.data.userInfo);
    }
    return result;
  }

  async login(user: IUserLogin): Promise<IUserControllerResult> {
    console.log('login', this.user);
    const result = await userController.signIn(user);
    if (result.result && result.data.userInfo !== undefined) {
      this.user = new User(result.data.userInfo);
    }
    return result;
  }

  async logoff() {
    console.log('logoff');
    this.user = null;
  }
}

const userManager = new UserManager();

export default userManager;
