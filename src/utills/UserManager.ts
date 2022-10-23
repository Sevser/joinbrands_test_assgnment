import { IUser } from '@/interfaces/IUser';
import { IUserRegister } from '@/interfaces/IUserRegister';
import indexDBManager from './IndexDBManager';

class User implements IUser {
  public email: string;

  public userName: string;

  constructor(email:string, userName:string) {
    this.userName = userName;
    this.email = email;
  }
}

class UserManager {
  private dbManager: any;

  public user: any;

  constructor() {
    this.dbManager = indexDBManager;
    this.user = null;
  }

  static async signUp(user: IUserRegister) {
    console.log(user);
  }

  async login({ email, password }: {email: string, password: string}) {
    console.log('login');
    this.user = new User(email, password);
  }

  async logoff() {
    console.log('logoff');
    this.user = null;
  }
}

const userManager = new UserManager();

export default userManager;
