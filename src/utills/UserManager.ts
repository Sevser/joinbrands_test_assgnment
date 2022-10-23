import { IUser } from '@/interfaces/IUser';
import { IUserRegister } from '@/interfaces/IUserRegister';
import indexDBManager from './IndexDBManager';

class User implements IUser {
  public email: string;

  public userName: string;

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

  async signUp(user: IUserRegister): Promise<any> {
    return new Promise((resolve, reject) => {
      const transaction = indexDBManager.db.transaction(['userList'], 'readwrite');
      transaction.oncomplete = (): void => {
        resolve({
          result: true,
        });
      };
      transaction.onerror = (event: any): void => {
        reject(new Error(event.target.error));
      };

      const objectStore = transaction.objectStore('userList');
      const objectStoreRequest = objectStore.add(user);

      objectStoreRequest.onsuccess = (event: any) => {
        console.log(event);
      };
    });
    console.log(this.user);
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
