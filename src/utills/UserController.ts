import { IUserRegister } from '@/interfaces/IUserRegister';
import UserRegister from '@/types/UserRegistre';
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
        resolve({
          result: true,
        });
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
}

const userController = new UserController();

export default userController;
