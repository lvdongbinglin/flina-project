
export const formatTime = (timeNum: number | Date) => {
const time: Date = new Date(timeNum)
// Wed Jun 18 2014 
// console.log(time.toDateString());

// // 2014-06-18T02:33:24.000Z
// console.log(time.toISOString());
// // 2014-06-18T02:33:24.000Z 
// console.log(time.toJSON());
// // 2014年6月18日 
// console.log(time.toLocaleDateString());
// // 2014年6月18日 上午10:33:24 
// console.log(time.toLocaleString());
// // 上午10:33:24 
// console.log(time.toLocaleTimeString());
// // Wed Jun 18 2014 10:33:24 GMT+0800 (中国标准时间)
// console.log(time.toString());
// // 10:33:24 GMT+0800 (中国标准时间) 
// console.log(time.toTimeString());
// // Wed, 18 Jun 2014 02:33:24 GMT
// console.log(time.toUTCString());
  return time.toLocaleString()

}

export const formatDay = (timeNum: number | Date) => {
  const time: Date = new Date(timeNum)
  // Wed Jun 18 2014 
  // console.log(time.toDateString());
  
  // // 2014-06-18T02:33:24.000Z
  // console.log(time.toISOString());
  // // 2014-06-18T02:33:24.000Z 
  // console.log(time.toJSON());
  // // 2014年6月18日 
  // console.log(time.toLocaleDateString());
  // // 2014年6月18日 上午10:33:24 
  // console.log(time.toLocaleString());
  // // 上午10:33:24 
  // console.log(time.toLocaleTimeString());
  // // Wed Jun 18 2014 10:33:24 GMT+0800 (中国标准时间)
  // console.log(time.toString());
  // // 10:33:24 GMT+0800 (中国标准时间) 
  // console.log(time.toTimeString());
  // // Wed, 18 Jun 2014 02:33:24 GMT
  // console.log(time.toUTCString());
    return time.toLocaleDateString()

  }