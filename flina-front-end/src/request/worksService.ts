import { keyInfo, map, usefulInfo } from "../App";
import { getGetOption, getPostOption } from "./secureService";



export interface Works {
  id: number;
  title: string;
  content: string;
  style: string;
  enable: boolean;
  authorStuId: string;
  upTime: Date;
}

export const postWorks = (works: any): Promise<any> => {
  works.activityId = map.get(keyInfo.activityId);
  works.userId = map.get(keyInfo.userInfo).id;
  const url = `${usefulInfo.domain}/user/works/`;
  return fetch(url, getPostOption(works));
}


export const getWorks = (worksId: number): Promise<any> => {
  const url = `${usefulInfo.domain}/user/works/${worksId}`;
  return fetch(url, getGetOption());
}

export const getWorksByAuthor = (): Promise<any> => {
  const userId = map.get(keyInfo.userInfo).id
  const url = `${usefulInfo.domain}/user/works/author/${userId}`;
  return fetch(url, getGetOption());
}


export const deleteTheWorks = (worksId: number): Promise<any> => {
  const userId = map.get(keyInfo.userInfo).id
  const url = `${usefulInfo.domain}/user/works/author/${userId}/works/${worksId}`;
  return fetch(url, getGetOption());
}





