

export const findKey = (obj: any,value: any, compare = (a: any, b: any) => a === b )=> {  
  return Object.keys(obj).find(k => compare(obj[k], value))
}

export const copyKey = (obj: any) => {
  const newObj: any = {};
  Object.keys(obj).map(key => newObj[key] = "");
  return newObj;
}