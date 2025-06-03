import { Box, Typography } from '@mui/material';
import type { Task } from '@/types/taskType';
import { BoardTaskCard } from './BoardTaskCard';

interface Props {
   title: string;
   tasks: Task[];
   onTaskClick: (task: Task) => void;
}

export const BoardColumn = ({ title, tasks, onTaskClick }: Props) => {
   return (
      <Box
         sx={{
            backgroundColor: 'background.paper',
            borderRadius: '12px',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '75vh',
            overflow: 'hidden',
            flexGrow: 1,
            pr: 1,
            minHeight: 0,
         }}
      >
         <Typography variant="h6" mb={2} fontWeight={600}>
            {title}
         </Typography>
         <Box
            sx={{
               overflowY: 'auto',
               flexGrow: 1,
               pr: 1,
            }}
         >
            {tasks.map((task) => (
               <BoardTaskCard key={task.id} task={task} onClick={() => onTaskClick(task)} />
            ))}
         </Box>
      </Box>
   );
};
