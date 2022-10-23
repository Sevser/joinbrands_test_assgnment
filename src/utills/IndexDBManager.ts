export class IndexDBManager {
  private DBOpenRequest: any;

  private db: any;

  public hasError: boolean;

  public pending: boolean;

  constructor() {
    this.DBOpenRequest = window.indexedDB.open('userList', 1);
    this.hasError = false;
    this.pending = true;
    this.DBOpenRequest.onerror = (event: any) => {
      console.error(event);
      this.hasError = true;
      this.pending = false;
    };
    this.DBOpenRequest.onsuccess = (event: any) => {
      console.log('Database initialised.');
      this.db = this.DBOpenRequest.result;
      this.pending = false;
    };
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
