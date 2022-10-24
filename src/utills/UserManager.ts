import { IUser } from '@/interfaces/IUser';
import { IUserLogin } from '@/interfaces/IUserLogin';
import userController from './UserController';

class User implements IUser {
  public email: string;

  public userName: string;

  public password: string;

  constructor(user: IUser) {
    this.userName = user.userName;
    this.email = user.email;
    this.password = user.password;
  }
}

class UserManager {
  public user: any;

  constructor() {
    this.user = null;
  }

  async login(user: IUserLogin) {
    console.log('login', this.user);
    console.log(await userController.signIn(user));
  }

  async logoff() {
    console.log('logoff');
    this.user = null;
  }
}

const userManager = new UserManager();

export default userManager;
