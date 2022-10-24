import { IUserProfile } from './IUserProfile';

export interface IUserControllerResultData {
    message?: string,
    userInfo?: IUserProfile,
}

export interface IUserControllerResult {
    result: boolean,
    data: IUserControllerResultData,
}
