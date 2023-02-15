/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ErrorRes {
  response?: { data: { error: string; message: string; statusCode: number } };
}

export default class HttpError {
  constructor(err: any) {
    if (err) {
      const { response } = err;
      if (response) {
        const { data } = response;
        if (data) {
          const { error, message, statusCode = -1 } = data;
          this.error = error;
          this.status = statusCode;
          if (typeof message === 'string') {
            this.message = message;
          } else if (Array.isArray(message)) {
            this.message = message[0] || '';
          }
        }
      }
    }
  }

  // Http status
  status = -1;

  // 오류 메시지
  message = '';

  // 오류 코드
  error = '';
}
