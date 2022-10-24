import { IUserProfile } from './IUserProfile';

export interface IUserControllerResultData {
    message?: string,
    userInfo?: IUserProfile,
    code?: string,
}

export interface IUserControllerResult {
    result: boolean,
    data: IUserControllerResultData,
}
