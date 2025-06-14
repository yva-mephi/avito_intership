import { httpClient } from '../httpClient';
import type { Task } from '@/types/taskType';

export class IssuesApi {
   async getAllIssues(): Promise<Task[]> {
      try {
         return await httpClient.get<Task[]>('/tasks');
      } catch (error) {
         console.error('Ошибка загрузки задач:', error);
         return [];
      }
   }

   async getIssueById(id: string): Promise<Task | null> {
      try {
         return await httpClient.get<Task>(`/tasks/${id}`);
      } catch (error) {
         console.error(`Ошибка загрузки задачи ${id}:`, error);
         return null;
      }
   }

   async createIssue(issue: Omit<Task, 'id' | 'createdAt'>): Promise<Task | null> {
      try {
         return await httpClient.post<Task>('/tasks/create', issue);
      } catch (error) {
         console.error('Ошибка создания задачи:', error);
         return null;
      }
   }

   async updateIssue(id: number, updatedFields: Partial<Task>): Promise<Task | null> {
      try {
         return await httpClient.put<Task>(`/tasks/update/${id}`, updatedFields);
      } catch (error) {
         console.error(`Ошибка обновления задачи ${id}:`, error);
         return null;
      }
   }

   async updateIssueStatus(id: number, status: Task['status']): Promise<Task | null> {
      try {
         return await httpClient.put<Task>(`/tasks/updateStatus/${id}`, { status });
      } catch (error) {
         console.error(`Ошибка обновления статуса задачи ${id}:`, error);
         return null;
      }
   }
}

export const issuesApi = new IssuesApi();
