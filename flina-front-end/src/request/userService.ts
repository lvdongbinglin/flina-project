import { usefulInfo } from "../App";
import { getGetOption, getPostOption } from "./secureService";


export const getUsermeta = (userId: number): Promise<any> => {

  const url = `${usefulInfo.domain}/user/usermeta/${userId}`;
  return fetch(url, getGetOption());
}


export const postUsermeta = (user: any): Promise<any> => {
  const url = `${usefulInfo.domain}/user/usermeta/`;
  return fetch(url, getPostOption(user));
}



