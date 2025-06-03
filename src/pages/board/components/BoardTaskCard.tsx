import { Card, CardContent, Typography } from '@mui/material';
import type { Task } from '@/types/taskType';
import { cardBaseStyle } from '@/styles/CardStyles';
interface Props {
   task: Task;
   onClick: () => void;
}

export const BoardTaskCard = ({ task, onClick }: Props) => {
   return (
      <Card
         variant="outlined"
         sx={{
            ...cardBaseStyle,
            margin: '10px',
         }}
         onClick={onClick}
      >
         <CardContent>
            <Typography variant="subtitle1" fontWeight={600}>
               {task.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {task.description}
            </Typography>
         </CardContent>
      </Card>
   );
};
