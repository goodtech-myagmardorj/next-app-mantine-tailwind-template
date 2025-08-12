export interface ErrorMessage {
  code: string;
  error: string;
  message: string;
}

export class HttpHandler {
  statusCode: number;
  code: string | undefined;
  error: string | undefined;
  message: string | undefined;
  payload: any | undefined;

  constructor(statusCode: number, errorMessage?: ErrorMessage) {
    const { code, error, message, ...rest } = errorMessage || {};
    this.statusCode = statusCode;
    this.code = code;
    this.error = error;
    this.message = message;
    this.payload = rest;
  }

  async handle(res: Response) {
    let data: any;

    try {
      try {
        data = await res.json();
      } catch (err: any) {
        data = await res.text();
      }
    } catch (err: any) {
      data = res;
    }

    switch (this.statusCode) {
      case 200:
      case 201:
      case 304:
        return data;
      default:
        throw new HttpHandler(this.statusCode, data);
    }
  }
}

export default HttpHandler;
