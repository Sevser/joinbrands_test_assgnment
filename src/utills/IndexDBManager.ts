export class IndexDBManager {
  private DBOpenRequest: any;

  public db: any;

  public hasError: boolean;

  public pending: boolean;

  constructor() {
    this.DBOpenRequest = window.indexedDB.open('users', 1);
    this.hasError = false;
    this.pending = true;
    let resolve: (value: unknown) => void;
    let reject: (value: unknown) => void;
    this.db = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    this.DBOpenRequest.onerror = (event: any): void => {
      console.error(event);
      this.hasError = true;
      this.pending = false;
      reject(event);
    };
    this.DBOpenRequest.onsuccess = (event: any): void => {
      console.log('Database initialised.');
      this.db = this.DBOpenRequest.result;
      this.pending = false;
      resolve(this.db);
    };
    this.DBOpenRequest.onupgradeneeded = (event: any): void => {
      const db = event.target.result;

      db.onerror = (event1: any) => {
        console.error(event1);
      };

      const objectStore = db.createObjectStore('userList', { keyPath: 'id', autoIncrement: true });
      objectStore.createIndex('userName', 'userName', { unique: true });
      objectStore.createIndex('email', 'email', { unique: true });
      objectStore.createIndex('password', 'password', { unique: false });
      objectStore.createIndex('registerCode', 'registerCode', { unique: false });
      objectStore.createIndex('resetPasswordCode', 'resetPasswordCode', { unique: false });
      objectStore.createIndex('activated', 'activated', { unique: false });
    };

    window.addEventListener('beforeunload', () => {
      if (!this.pending && !this.hasError) {
        this.db.close();
      }
    });
  }
}

if (window.indexedDB === undefined) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
}

if (window.IDBTransaction === undefined) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.indexedDB = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
}

if (window.IDBKeyRange === undefined) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.indexedDB = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
}

const indexDBManager = new IndexDBManager();

export default indexDBManager;
