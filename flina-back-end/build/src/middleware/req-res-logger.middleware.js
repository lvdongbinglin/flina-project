"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqresLogger = void 0;
const common_1 = require("@nestjs/common");
const reqresLogger = (req, res, next) => {
    const reqInfo = {
        ip: req.ip,
        headers: req.headers,
        ua: req.headers['user-agent'],
        method: req.method,
        url: req.url,
        query: req.query,
        param: req.param,
        body: req.body
    };
    common_1.Logger.log("请求开始：" + JSON.stringify(reqInfo));
    next();
    common_1.Logger.log("响应结束：" + JSON.stringify(res.body));
};
exports.reqresLogger = reqresLogger;
//# sourceMappingURL=req-res-logger.middleware.js.map