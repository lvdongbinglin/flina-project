
const successCode = 200;
const clientErrorCode = 400;
const partnerErrorCode = 500;

export class Message<T> {
  code: number;
  message: string;
  extra: T

  constructor(code: number, message: string, extra: T) {
    this.code = code;
    this.message = message;
    this.extra = extra;
  }

  static successful<T>(message: string, extra: T) {
    return new Message(successCode, message, extra);
  }

  static clientError<T>(message: string, extra: T) {
    return new Message(clientErrorCode, message, extra);
  }

  static partnerError<T>(message: string, extra: T) {
    return new Message(partnerErrorCode, message, extra);
  }
}

