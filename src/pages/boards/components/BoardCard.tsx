import { Card, CardContent, Typography, Box } from '@mui/material';
import type { Board } from '@/types/boardType';
import { useNavigate } from 'react-router-dom';
import { cardBaseStyle } from '@/styles/CardStyles';

interface Props {
   board: Board;
}

export const BoardCard = ({ board }: Props) => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate(`/board/${board.id}`);
   };

   return (
      <Card
         variant="outlined"
         onClick={handleClick}
         sx={{
            ...cardBaseStyle,
         }}
      >
         <CardContent>
            <Typography variant="h6" gutterBottom fontWeight={600}>
               {board.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
               {board.description || 'Без описания'}
            </Typography>
            <Box display="flex" justifyContent="space-between">
               <Typography variant="body2" color="text.secondary">
                  Задач: {board.taskCount}
               </Typography>
            </Box>
         </CardContent>
      </Card>
   );
};
