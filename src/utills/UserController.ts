import { IUserControllerResult } from '@/interfaces/IUserControllerResult';
import { IUserLogin } from '@/interfaces/IUserLogin';
import { IUserRegister } from '@/interfaces/IUserRegister';
import UserControllerResult from '@/types/UserControllerResult';
import UserRegister from '@/types/UserRegistre';
import { sha256 } from 'js-sha256';
import indexDBManager from './IndexDBManager';

class UserController {
  private db: any;

  constructor() {
    indexDBManager.db.then((res: any) => {
      this.db = res;
    });
  }

  async signUp(user: IUserRegister): Promise<any> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['userList'], 'readwrite');
      transaction.oncomplete = (): void => {
        resolve(new UserControllerResult({ data: {}, result: true }));
      };
      transaction.onerror = (event: any): void => {
        reject(new Error(event.target.error));
      };

      const objectStore = transaction.objectStore('userList');
      console.log(new UserRegister(user));
      const objectStoreRequest = objectStore.add(new UserRegister(user));

      objectStoreRequest.onsuccess = (event: any) => {
        console.log(event);
      };
    });
  }

  async signIn(user: IUserLogin): Promise<IUserControllerResult> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(['userList'], 'readwrite');
      const data = new UserControllerResult({ data: {}, result: false });
      transaction.oncomplete = (): void => {
        console.log(data);
        resolve(data);
      };
      transaction.onerror = (event: any): void => {
        reject(new Error(event.target.error));
      };

      const objectStore = transaction.objectStore('userList');
      const index = objectStore.index('email');

      const lowerBound = user.email;
      const upperBound = user.email;
      const range = IDBKeyRange.bound(lowerBound, upperBound);
      const request = index.openCursor(range);

      request.onsuccess = (event: any) => {
        if (event.target && event.target.result && event.target.result.value) {
          const { value } = event.target.result;
          if (!value.activated) {
            data.result = false;
            data.data.message = 'Email not confirmed check your email!';
            return;
          }
          const calcPass = sha256(user.password.concat(process.env.VUE_APP_SALT));
          if (calcPass !== value.password) {
            data.result = false;
            data.data.message = 'User with this password wasn`t found';
            return;
          }
          data.result = true;
          data.data.userInfo = {
            userName: value.userName,
            email: value.email,
          };
        }
      };
    });
  }
}

const userController = new UserController();

export default userController;
