class IndexDBManager {
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

  private DBOpenRequest: any;

  private db: any;

  public hasError: boolean;

  public pending: boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

const indexDBManager = new IndexDBManager();

export default indexDBManager;
