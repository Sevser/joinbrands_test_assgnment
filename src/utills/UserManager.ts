import { IUser } from '@/interfaces/IUser';

class User implements IUser {
  public email: string;

  public userName: string;

  public activated?: boolean;

  constructor(email: string, userName: string) {
    this.userName = userName;
    this.email = email;
  }
}

class UserManager {
  public user: any;

  constructor() {
    this.user = null;
  }

  async login({ email, password }: { email: string, password: string }) {
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
