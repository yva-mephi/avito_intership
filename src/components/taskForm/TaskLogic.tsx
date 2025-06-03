import { useEffect, useState, useMemo } from 'react';
import { useTaskModal } from '@/context/TaskModalContext';
import type { Task } from '@/types/taskType';
import type { Board } from '@/types/boardType';
import type { User } from '@/types/userType';
import { TaskForm } from './TaskForm';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { usersApi } from '@/api/users/usersApi';
import { boardsApi } from '@/api/boards/boardsApi';

const statuses: Task['status'][] = ['Backlog', 'InProgress', 'Done'];
const priorities: Task['priority'][] = ['Low', 'Medium', 'High'];

export const TaskLogic = () => {
   const { isOpen, taskData, source, closeModal } = useTaskModal();

   const [boards, setBoards] = useState<Board[]>([]);
   const [users, setUsers] = useState<User[]>([]);
   const [loading, setLoading] = useState(true);

   const isBoardSource = source === 'board';
   const isHeaderSource = source === 'header';
   const formMode: 'create' | 'edit' = isHeaderSource ? 'create' : 'edit';

   const fixedBoard =
      isBoardSource && taskData?.boardId ? boards.find((b) => b.id === taskData.boardId) : null;

   const boardOptions = useMemo(() => {
      if (fixedBoard) return [fixedBoard];
      return boards;
   }, [boards, fixedBoard]);

   useEffect(() => {
      if (!isOpen) return;

      const fetchData = async () => {
         setLoading(true);
         try {
            const [boardsData, usersData] = await Promise.all([
               boardsApi.getAllBoards(),
               usersApi.getAllUsers(),
            ]);
            setBoards(boardsData);
            setUsers(usersData);
         } catch (error) {
            console.error('Ошибка при загрузке данных:', error);
         } finally {
            setLoading(false);
         }
      };

      fetchData();
   }, [isOpen]);

   return (
      <Dialog open={isOpen} onClose={closeModal} maxWidth="sm" fullWidth>
         <DialogContent sx={{ bgcolor: 'background.paper' }}>
            {loading ? (
               <Box display="flex" justifyContent="center" alignItems="center" height={200}>
                  <CircularProgress color="primary" />
               </Box>
            ) : (
               <TaskForm
                  mode={formMode}
                  task={taskData ?? undefined}
                  users={users}
                  boards={boardOptions}
                  statuses={statuses}
                  priorities={priorities}
                  formTitle={formMode === 'create' ? 'Создание задачи' : 'Редактирование задачи'}
                  disableBoardSelect={!!fixedBoard}
                  fixedBoard={fixedBoard}
                  source={source ?? ''}
               />
            )}
         </DialogContent>
      </Dialog>
   );
};
