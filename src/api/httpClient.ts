import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export class HttpClient {
   private instance: AxiosInstance;

   constructor(baseURL: string = BASE_URL) {
      this.instance = axios.create({ baseURL });
   }

   get<T>(url: string, config?: AxiosRequestConfig) {
      return this.instance.get(url, config).then((res) => res.data.data as T);
   }

   post<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
      return this.instance.post<T>(url, data, config).then((res) => res.data);
   }

   put<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
      return this.instance.put<T>(url, data, config).then((res) => res.data);
   }

   delete<T>(url: string, config?: AxiosRequestConfig) {
      return this.instance.delete<T>(url, config).then((res) => res.data);
   }

   patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig) {
      return this.instance.patch<T>(url, data, config).then((res) => res.data);
   }
}

export const httpClient = new HttpClient();
