import { httpClient } from '../httpClient';
import type { Board } from '@/types/boardType';
import type { Task } from '@/types/taskType';

export class BoardsApi {
   async getAllBoards(): Promise<Board[]> {
      try {
         return await httpClient.get<Board[]>('/boards');
      } catch (error) {
         console.error('Ошибка загрузки досок:', error);
         return [];
      }
   }

   async getBoardById(id: number): Promise<Task[] | null> {
      try {
         return await httpClient.get<Task[]>(`/boards/${id}`);
      } catch (error) {
         console.error(`Ошибка загрузки доски с id=${id}:`, error);
         return null;
      }
   }
}

export const boardsApi = new BoardsApi();
