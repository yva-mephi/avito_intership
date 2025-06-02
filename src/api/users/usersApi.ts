import { httpClient } from '../httpClient';
import type { User } from '@/types/userType';

export class UsersApi {
   async getAllUsers(): Promise<User[]> {
      try {
         return await httpClient.get<User[]>('/users');
      } catch (error) {
         console.error('Ошибка загрузки пользователей:', error);
         return [];
      }
   }

   async getUserById(id: string): Promise<User | null> {
      try {
         return await httpClient.get<User>(`/users/${id}`);
      } catch (error) {
         console.error(`Ошибка загрузки пользователя с id=${id}:`, error);
         return null;
      }
   }
}

export const usersApi = new UsersApi();
