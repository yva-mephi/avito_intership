import { Box, MenuItem, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import type { Task } from '@/types/taskType';

interface Props {
   issues: Task[];
   onFilter: (filtered: Task[]) => void;
}

export const IssueFilter = ({ issues, onFilter }: Props) => {
   const [status, setStatus] = useState('');
   const [board, setBoard] = useState('');
   const [executor, setExecutor] = useState('');
   const [title, setTitle] = useState('');

   useEffect(() => {
      let result = [...issues];

      if (status) result = result.filter((i) => i.status === status);
      if (board) result = result.filter((i) => i.boardId.toString().includes(board));
      if (executor)
         result = result.filter((i) =>
            i.assignee?.fullName.toLowerCase().includes(executor.toLowerCase())
         );
      if (title) result = result.filter((i) => i.title.toLowerCase().includes(title.toLowerCase()));

      onFilter(result);
   }, [status, board, executor, title, issues]);

   return (
      <Box display="flex" gap={2} flexWrap="wrap" padding="20px">
         <TextField
            select
            label="Статус"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            sx={{ minWidth: 160 }}
         >
            <MenuItem value="">Все</MenuItem>
            <MenuItem value="Backlog">TODO</MenuItem>
            <MenuItem value="InProgress">In Progress</MenuItem>
            <MenuItem value="Done">Done</MenuItem>
         </TextField>
         <TextField
            label="Поиск по названию"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <TextField
            label="Исполнитель"
            value={executor}
            onChange={(e) => setExecutor(e.target.value)}
         />
         <TextField label="ID доски" value={board} onChange={(e) => setBoard(e.target.value)} />
      </Box>
   );
};
