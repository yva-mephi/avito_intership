import { Card, CardContent, Typography, Chip, Avatar, Stack } from '@mui/material';
import type { Task } from '@/types/taskType';
import { useTaskModal } from '../../../context/TaskModalContext';
import { cardBaseStyle } from '@/styles/CardStyles';

interface Props {
   issue: Task;
   onRefresh?: () => void;
}

export const IssueCard = ({ issue, onRefresh }: Props) => {
   const { openModal } = useTaskModal();

   const handleClick = () => {
      openModal('issue', issue, onRefresh);
   };

   return (
      <Card variant="outlined" onClick={handleClick} sx={{ ...cardBaseStyle }}>
         <CardContent>
            <Typography variant="h5" gutterBottom>
               {issue.title}
            </Typography>

            <Typography variant="body1" color="text.secondary" mb={2}>
               {issue.description}
            </Typography>

            <Stack spacing={1} mb={2}>
               <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip label={`Status: ${issue.status}`} size="medium" />
                  <Chip label={`Priority: ${issue.priority}`} size="medium" />
               </Stack>

               <Stack direction="row" spacing={1}>
                  <Chip label={`Board: ${issue.boardName}`} size="medium" />
               </Stack>
            </Stack>
            {issue.assignee && (
               <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar src={issue.assignee.avatarUrl} alt={issue.assignee.fullName} />
                  <Typography variant="body1">{issue.assignee.fullName}</Typography>
               </Stack>
            )}
         </CardContent>
      </Card>
   );
};
