import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { boardsApi } from '@/api/boards/boardsApi';
import type { Task } from '@/types/taskType';
import type { Board } from '@/types/boardType';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useTaskModal } from '@/context/TaskModalContext';
import { BoardColumn } from './components/BoardColumn';

export const BoardPage = () => {
   const { id } = useParams();
   const boardId = Number(id);
   const { openModal } = useTaskModal();

   const [board, setBoard] = useState<Board | null>(null);
   const [tasks, setTasks] = useState<Task[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const loadData = async () => {
         setLoading(true);

         const allBoards = await boardsApi.getAllBoards();
         const foundBoard = allBoards.find((b) => b.id === boardId) ?? null;
         const boardTasks = await boardsApi.getBoardById(boardId);

         setBoard(foundBoard);
         if (boardTasks) {
            setTasks(boardTasks);
         } else {
            setTasks([]);
         }

         setLoading(false);
      };

      loadData();
   }, [boardId]);

   const handleOpenTask = (task: Task) => {
      openModal('board', task, () => {
         setTasks((prev) => prev.map((t) => (t.id === task.id ? { ...t, ...task } : t)));
      });
   };

   const grouped = {
      Backlog: tasks.filter((t) => t.status === 'Backlog'),
      InProgress: tasks.filter((t) => t.status === 'InProgress'),
      Done: tasks.filter((t) => t.status === 'Done'),
   };

   if (loading) {
      return (
         <Box display="flex" justifyContent="center" mt={5}>
            <CircularProgress />
         </Box>
      );
   }

   if (!board) {
      return (
         <Box display="flex" justifyContent="center" mt={5}>
            <Typography variant="h6">Доска не найдена</Typography>
         </Box>
      );
   }

   return (
      <Box p={4} height="100%" display="flex" flexDirection="column" sx={{ overflow: 'hidden' }}>
         <Typography variant="h4" fontWeight={600} gutterBottom>
            {board.name}
         </Typography>
         <Typography variant="subtitle1" gutterBottom>
            {board.description}
         </Typography>

         <Box
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap={2}
            mt={4}
            height="calc(100vh - 200px)"
         >
            <BoardColumn title="To do" tasks={grouped.Backlog} onTaskClick={handleOpenTask} />
            <BoardColumn
               title="In Progress"
               tasks={grouped.InProgress}
               onTaskClick={handleOpenTask}
            />
            <BoardColumn title="Done" tasks={grouped.Done} onTaskClick={handleOpenTask} />
         </Box>
      </Box>
   );
};
