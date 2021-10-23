import { Logger } from "@nestjs/common";


export interface ReqInfo {
  ip: string;
  headers: string;
  ua: string;
  method: string;
  url: string;
  query: string;
  param: string;
  body: string;
}


export const reqresLogger = (req, res, next) => {
  const reqInfo = {
    ip: req.ip,
    headers: req.headers,
    ua: req.headers['user-agent'],
    method: req.method,
    url: req.url,
    query: req.query,
    param: req.param,
    body: req.body
  }

  Logger.log("请求开始：" + JSON.stringify(reqInfo))
  next();
  Logger.log("响应结束：" + JSON.stringify(res.body));
};