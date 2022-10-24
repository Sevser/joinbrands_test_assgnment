import { IUserControllerResult } from '@/interfaces/IUserControllerResult';
import { IUserLogin } from '@/interfaces/IUserLogin';
import { IUserPasswordRecovery } from '@/interfaces/IUserPasswordRecovery';
import { IUserRegister } from '@/interfaces/IUserRegister';
import { IUserUpdatePassword } from '@/interfaces/IUserUpdatePassword';
import UserControllerResult from '@/types/UserControllerResult';
import UserPasswordRecovery from '@/types/UserPasswordRecovery';
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
      const objectStoreRequest = objectStore.add(new UserRegister(user));

      objectStoreRequest.onsuccess = (event: any) => {
        console.log(event);
      };
    });
  }

  async resetPassword(user: IUserPasswordRecovery): Promise<IUserControllerResult> {
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
          const newUser = new UserPasswordRecovery(value);
          const objectStoreRequest = objectStore.put(newUser);
          objectStoreRequest.onsuccess = () => {
            data.result = true;
            data.data.userInfo = {
              userName: value.userName,
              email: value.email,
            };
            data.data.message = 'Link was send to your email';
          };
        } else {
          data.result = false;
          data.data.message = 'User wasn`t found';
        }
      };
    });
  }

  async updatePassword(user: IUserUpdatePassword): Promise<IUserControllerResult> {
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
          if (user.password) {
            const calcPass = sha256(user.password.concat(process.env.VUE_APP_SALT));
            if (calcPass !== value.password) {
              data.result = false;
              data.data.message = 'Password incorrect';
              return;
            }
          } else if (user.code !== value.resetPasswordCode) {
            data.result = false;
            data.data.message = 'Reset password code incorrect';
            return;
          }

          const newUser = new UserRegister({
            ...value,
            password: user.newPassword,
          });
          const objectStoreRequest = objectStore.put(newUser);

          objectStoreRequest.onsuccess = (eventUpdate: any) => {
            console.log(eventUpdate);
            data.result = true;
            data.data.userInfo = {
              userName: value.userName,
              email: value.email,
            };
          };
        } else {
          data.result = false;
          data.data.message = 'User wasn`t found';
        }
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
        } else {
          data.result = false;
          data.data.message = 'User wasn`t found';
        }
      };
    });
  }
}

const userController = new UserController();

export default userController;
