
const successCode = 200;
const clientErrorCode = 400;
const partnerErrorCode = 500;

export class Message<T> {
  status: number;
  content: string;
  extra: T

  constructor(code: number, content: string, extra: T) {
    this.status = code;
    this.content = content;
    this.extra = extra;
  }

  static successful<T>(content: string, extra: T) {
    return new Message(successCode, content, extra);
  }

  static clientError<T>(message: string, extra: T) {
    return new Message(clientErrorCode, message, extra);
  }

  static partnerError<T>(message: string, extra: T) {
    return new Message(partnerErrorCode, message, extra);
  }
}

