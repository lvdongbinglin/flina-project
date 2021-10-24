import { keyInfo, map, usefulInfo } from "../App";
import { getDESCtypt } from '../converters/PassCoverter';



export interface User {
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
  if (map.get(keyInfo.userInfo) !== null && map.get(keyInfo.userInfo) !== undefined) {
    jsonHeader.append('Authorization', "Bearer " + map.get(keyInfo.userInfo).jwt);
  }
  return jsonHeader;
}


export const getPostOption = (obj: any): RequestInit => {
  const newObj: any = { ...obj }
  if (newObj.hasOwnProperty(usefulInfo.DES_PROPERTY)) newObj[usefulInfo.DES_PROPERTY] = getDESCtypt(newObj[usefulInfo.DES_PROPERTY] as string)
  const objStr = JSON.stringify(newObj)
  const option = { method: "POST", body: objStr, mode: "cors", headers: getJsonHeader() }
  return option as RequestInit;
}

export const getPutOption = (obj: any): RequestInit => {
  const newObj: any = { ...obj }
  if (newObj.hasOwnProperty(usefulInfo.DES_PROPERTY)) newObj[usefulInfo.DES_PROPERTY] = getDESCtypt(newObj[usefulInfo.DES_PROPERTY] as string)
  const objStr = JSON.stringify(newObj)
  const option = { method: "PUT", body: objStr, mode: "cors", headers: getJsonHeader() }
  return option as RequestInit;
}

export const getGetOption = (): RequestInit => {

  const option = { method: "GET", mode: "cors", headers: getJsonHeader() }
  return option as RequestInit;
}


export const login = (user: any): Promise<any> => {
  const url = `${usefulInfo.domain}/login/signin`;
  console.log(url);

  return fetch(url, getPostOption(user));
}

export const logup = (user: any): Promise<any> => {

  const url = `${usefulInfo.domain}/login/signup`;
  return fetch(url, getPostOption(user));
}

export const resetPass = (user: any): Promise<any> => {

  const url = `${usefulInfo.domain}/login/pass`;
  return fetch(url, getPutOption(user));
}

export const getVerfication = (user: any): Promise<any> => {
  const url = `${usefulInfo.domain}/login/code/email/${user.email}`;
  return fetch(url, getGetOption());
}

export const getUsername = (user: any): Promise<any> => {
  const url = `${usefulInfo.domain}/login/code/email/${user.email}`;
  return fetch(url, getGetOption());
}
