import type { WebStorage } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = (): WebStorage => {
  return {
    getItem(): Promise<string | null> {
      return Promise.resolve(null);
    },
    setItem(): Promise<void> {
      return Promise.resolve();
    },
    removeItem(): Promise<void> {
      return Promise.resolve();
    },
  };
};

const storage: WebStorage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export default storage;
