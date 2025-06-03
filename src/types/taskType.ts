export interface Task {
   id: number;
   title: string;
   description: string;
   status: 'Backlog' | 'InProgress' | 'Done';
   priority: 'Low' | 'Medium' | 'High';
   assignee?: {
      id: number;
      fullName: string;
      email: string;
      avatarUrl?: string;
   };
   boardId: number;
   boardName: string;
}
