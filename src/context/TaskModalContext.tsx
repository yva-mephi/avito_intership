import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Task } from '@/types/taskType';

type TaskSource = 'header' | 'board' | 'issue' | string;

interface TaskModalContextType {
   isOpen: boolean;
   source: TaskSource | null;
   taskData: Task | null;
   openModal: (source: TaskSource, taskData?: Task | null, onCloseCallback?: () => void) => void;
   closeModal: () => void;
}

const TaskModalContext = createContext<TaskModalContextType | undefined>(undefined);

export const TaskModalProvider = ({ children }: { children: ReactNode }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [source, setSource] = useState<TaskSource | null>(null);
   const [taskData, setTaskData] = useState<Task | null>(null);
   const [onCloseCallback, setOnCloseCallback] = useState<(() => void) | null>(null);

   const openModal = (
      source: TaskSource,
      taskData: Task | null = null,
      onCloseCallback?: () => void
   ) => {
      setIsOpen(true);
      setSource(source);
      setTaskData(taskData);
      setOnCloseCallback(() => onCloseCallback ?? null);
   };

   const closeModal = () => {
      setIsOpen(false);
      setSource(null);
      setTaskData(null);
      if (onCloseCallback) {
         onCloseCallback();
         setOnCloseCallback(null);
      }
   };

   return (
      <TaskModalContext.Provider value={{ isOpen, source, taskData, openModal, closeModal }}>
         {children}
      </TaskModalContext.Provider>
   );
};

export const useTaskModal = (): TaskModalContextType => {
   const context = useContext(TaskModalContext);
   if (!context) throw new Error('проблемы с TaskModalProvider!');
   return context;
};
