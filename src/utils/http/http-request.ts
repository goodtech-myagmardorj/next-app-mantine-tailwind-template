import type { Store } from "redux";
import qs from "qs";
import { HttpHandler } from "./http-handler";

type Options = {
  method: string;
  contentType?: string;
};

type JSONobj =
  | {
      [key: string]:
        | string
        | number
        | boolean
        | undefined
        | null
        | JSONobj
        | JSONobj[]
        | Blob;
    }
  | JSONobj[];

export class HttpRequest {
  store?: Store;
  prefix = "";
  host = "";
  errorHandler?: (statusCode: number, error: HttpHandler) => void;

  constructor(
    host: string | null = "",
    prefix: string | null = "",
    errorHandler?: (statusCode: number, error: HttpHandler) => void,
  ) {
    this.host = host || "";
    this.prefix = prefix || "";
    this.errorHandler = errorHandler;
  }

  private getHeaders(contentType?: string) {
    const headers: Record<string, string> = {
      Platform: "CUSTOMS",
    };

    if (!this.store) return headers;

    const state = this.store.getState();

    if (state.auth?.accessToken) {
      headers.Authorization = `Bearer ${state.auth.accessToken}`;
    }

    if (state.auth?.deviceToken) {
      headers["X-Device"] = state.auth.deviceToken;
    }

    if (contentType !== "multipart/form-data") {
      headers.Accept = "application/json";
      headers["Content-Type"] = "application/json; charset=utf-8";
    }

    return headers;
  }

  private buildUrl(api: string, data: JSONobj, method: string) {
    const queryString =
      method === "GET" ? qs.stringify(data, { addQueryPrefix: true }) : "";
    return `${this.host}${this.prefix}${api}${queryString}`;
  }

  async request(api: string, data: JSONobj, options: Options) {
    if (!this.store) {
      throw new Error("No store found");
    }

    const url = this.buildUrl(api, data, options.method);
    const headers = this.getHeaders(options.contentType);

    const fetchOptions: RequestInit = {
      method: options.method,
      credentials: "include",
      headers,
    };

    if (options.method !== "GET") {
      fetchOptions.body =
        options.contentType === "multipart/form-data"
          ? (data as unknown as BodyInit)
          : (JSON.stringify(data) as BodyInit);
    }

    try {
      const res = await fetch(url, fetchOptions);
      const http = new HttpHandler(res.status);
      return await http.handle(res);
    } catch (error) {
      if (this.errorHandler) {
        this.errorHandler(
          (error as HttpHandler).statusCode,
          error as HttpHandler,
        );
        return null;
      }
      throw error;
    }
  }

  get(api: string, data?: JSONobj) {
    return this.request(api, data || {}, { method: "GET" });
  }

  post(api: string, data?: JSONobj) {
    return this.request(api, data || {}, { method: "POST" });
  }

  put(api: string, data?: JSONobj) {
    return this.request(api, data || {}, { method: "PUT" });
  }

  del(api: string, data?: JSONobj) {
    return this.request(api, data || {}, { method: "DELETE" });
  }

  upload(api: string, data?: any) {
    return this.request(api, data || {}, {
      method: "POST",
      contentType: "multipart/form-data",
    });
  }

  async blob(api: string, data?: JSONobj) {
    if (!this.store) {
      throw new Error("No store found");
    }

    const state = this.store.getState();
    console.log("state: ", state);
    const headers = this.getHeaders();

    const url = this.buildUrl(api, data || {}, "GET");

    const fetchOptions: RequestInit = {
      method: "GET",
      credentials: "include",
      headers,
    };

    const res = await fetch(url, fetchOptions);
    return res;
  }
}
