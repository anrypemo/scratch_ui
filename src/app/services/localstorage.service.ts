
export class LocalStorageService {
  private storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  public getItem(key: string): any {
    return this.storage && JSON.parse(this.storage.getItem(key));
  }

  public setItem(key: string, data: any): void {
    this.storage && this.storage.setItem(key, JSON.stringify(data));
  }

  public removeItem(key: string): void {
    this.storage && this.storage.removeItem(key);
  }
}
