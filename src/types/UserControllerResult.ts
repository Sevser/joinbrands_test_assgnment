import { IUserControllerResult, IUserControllerResultData } from '@/interfaces/IUserControllerResult';

export default class UserControllerResult implements IUserControllerResult {
  public data: IUserControllerResultData;

  public result: boolean;

  constructor(result: IUserControllerResult) {
    this.data = result.data;
    this.result = result.result || false;
  }
}
