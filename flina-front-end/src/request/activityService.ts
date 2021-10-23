import { usefulInfo } from "../App";
import { getGetOption } from "./secureService";


export interface Activity {
  id: number
  title: String;
  startTime: Date;
  endTime: Date;
}



export const getActivity = (): Promise<any> => {

  const url = `${usefulInfo.domain}/user/activity/`;
  return fetch(url, getGetOption());
}
