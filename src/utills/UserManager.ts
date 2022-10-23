interface IUser {
  userName: string,
  email: string,
}

class User implements IUser {
  public email: string;

  public userName: string;

  constructor(email:string, userName:string) {
    this.userName = userName;
    this.email = email;
  }
}

class UserManager {
  constructor() {
    this.user = null;
  }

  async login({ email, password }: {email: string, password: string}) {
    console.log('login');
    this.user = new User(email, password);
  }

  async logoff() {
    console.log('logoff');
    this.user = null;
  }

  user: any;
}

const userManager = new UserManager();

export default userManager;
