import { IUser } from './IUser';

export interface IUserRegister extends IUser {
  registerCode?: string,
  activated?: boolean,
}
