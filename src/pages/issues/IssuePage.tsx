import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import { issuesApi } from '../../api/issues/IssuesApi';
import type { Task } from '@/types/taskType';
import { IssueCard } from './components/IssueCard';
import { IssueFilter } from './components/IssueFilter';
import { useTaskModal } from '@/context/TaskModalContext';
import { buttonBaseStyle } from '@/styles/FormStyles';

export const IssuePage = () => {
   const [issues, setIssues] = useState<Task[]>([]);
   const [filtered, setFiltered] = useState<Task[]>([]);
   const [loading, setLoading] = useState(true);
   const { openModal } = useTaskModal();

   useEffect(() => {
      const handler = () => {
         fetchIssues();
      };
      window.addEventListener('taskCreated', handler);
      return () => window.removeEventListener('taskCreated', handler);
   }, []);

   const fetchIssues = async () => {
      setLoading(true);
      try {
         const data = await issuesApi.getAllIssues();
         setIssues(data);
         setFiltered(data);
      } catch (e) {
         console.warn('Нет задач или ошибка при получении.');
         setIssues([]);
         setFiltered([]);
      }
      setLoading(false);
   };

   useEffect(() => {
      fetchIssues();
   }, []);

   return (
      <Box p={4} height="100%" display="flex" flexDirection="column" sx={{ overflow: 'auto' }}>
         <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
            <Typography variant="h4" fontWeight={600}>
               Все задачи
            </Typography>
            <Button
               sx={buttonBaseStyle}
               onClick={() => {
                  openModal('header', null, fetchIssues);
               }}
            >
               Создать задачу
            </Button>
         </Box>

         <IssueFilter issues={issues} onFilter={setFiltered} />

         {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
               <CircularProgress />
            </Box>
         ) : (
            <Box display="flex" flexDirection="column" gap={2}>
               {filtered.map((issue) => (
                  <IssueCard key={issue.id} issue={issue} onRefresh={fetchIssues} />
               ))}
            </Box>
         )}
      </Box>
   );
};
