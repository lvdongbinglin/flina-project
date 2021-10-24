import { usefulInfo } from "../App";
import { getGetOption, getPostOption } from "./secureService";


export const getUsermeta = (userId: number): Promise<any> => {

  const url = `${usefulInfo.domain}/login/${userId}`;
  return fetch(url, getGetOption());
}


export const postUsermeta = (user: any): Promise<any> => {
  const url = `${usefulInfo.domain}/login/`;
  return fetch(url, getPostOption(user));
}



