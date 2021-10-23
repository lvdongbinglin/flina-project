import { keyInfo, map, usefulInfo } from "../App";
import { getDESCtypt } from '../converters/PassCoverter';


export interface User{
	id: number;
	enable: boolean;
	password: string;
	roles: string;
	username: string;
	email: string;
	level: number;
}



export interface UserLoginRes {
  jwt: string;
  id: number;
  email: string;
  username: string;
}


export const getJsonHeader = () => {
  const jsonHeader = new Headers();
  jsonHeader.append('content-type', 'application/json');
  if(map.get(keyInfo.userInfo) !== null && map.get(keyInfo.userInfo) !== undefined) {
    jsonHeader.append('Authorization', "Bearer " + map.get(keyInfo.userInfo).jwt);
  } 
  return jsonHeader;
}


export const getPostOption = (obj: any): RequestInit => {
  const newObj: any = {...obj}
  if(newObj.hasOwnProperty(usefulInfo.DES_PROPERTY)) newObj[usefulInfo.DES_PROPERTY] = getDESCtypt(newObj[usefulInfo.DES_PROPERTY] as string)
  const objStr = JSON.stringify(newObj)
  const option = {method: "POST", body: objStr, mode: "cors", headers: getJsonHeader()}
  return option as RequestInit;
}

export const getGetOption = (): RequestInit => {
  
  const option = {method: "GET",  mode: "cors", headers: getJsonHeader()}
  return option as RequestInit;
}


export const login = (user: any): Promise<any> => {
  const url = `${usefulInfo.domain}/any/user/log-in`;
  return fetch(url, getPostOption(user));
}

export const logup = (user: any): Promise<any> => {
  
  const url = `${usefulInfo.domain}/any/user/log-up`;
  return fetch(url, getPostOption(user));
}

export const resetPass = (user: any): Promise<any> => {
  
  const url = `${usefulInfo.domain}/any/user/reset-password`;
  return fetch(url, getPostOption(user));
}

export const getVerfication = (user: any): Promise<any> => {
  const url = `${usefulInfo.domain}/any/user/verification-code`;
  return fetch(url, getPostOption(user));
}
