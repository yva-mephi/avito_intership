import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { boardsApi } from '@/api/boards/boardsApi';
import type { Board } from '@/types/boardType';
import { BoardCard } from './components/BoardCard';

export const BoardsPage = () => {
   const [boards, setBoards] = useState<Board[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchBoards = async () => {
         setLoading(true);
         try {
            const data = await boardsApi.getAllBoards();
            setBoards(data);
         } catch (e) {
            console.warn('Ошибка при получении досок.');
            setBoards([]);
         }
         setLoading(false);
      };

      fetchBoards();
   }, []);

   return (
      <Box p={4}>
         <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
            <Typography variant="h4" fontWeight={600}>
               Все доски
            </Typography>
         </Box>

         {loading ? (
            <Box display="flex" justifyContent="center" mt={8}>
               <CircularProgress />
            </Box>
         ) : boards.length === 0 ? (
            <Typography variant="body1">Нет досок для отображения.</Typography>
         ) : (
            <Box
               display="grid"
               gridTemplateColumns={{
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
               }}
               gap={3}
            >
               {boards.map((board) => (
                  <BoardCard key={board.id} board={board} />
               ))}
            </Box>
         )}
      </Box>
   );
};
