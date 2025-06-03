import { Box, Button, DialogTitle } from '@mui/material';
import { useTaskModal } from '@/context/TaskModalContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { Task } from '@/types/taskType';
import type { Board } from '@/types/boardType';
import type { User } from '@/types/userType';
import { issuesApi } from '@/api/issues/IssuesApi';
import { TaskFormFields } from './TaskFormFields';
import { buttonBaseStyle } from '@/styles/FormStyles';

interface TaskFormProps {
   mode: 'create' | 'edit';
   task?: Task;
   users: User[];
   boards: Board[];
   statuses: Task['status'][];
   priorities: Task['priority'][];
   formTitle: string;
   disableBoardSelect?: boolean;
   fixedBoard?: Board | null;
   source: 'header' | 'board' | 'issue' | string;
}

export const TaskForm = ({
   mode,
   task,
   users,
   boards,
   statuses,
   priorities,
   formTitle,
   disableBoardSelect = false,
   fixedBoard,
   source,
}: TaskFormProps) => {
   const { closeModal } = useTaskModal();
   const navigate = useNavigate();

   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');
   const [assigneeId, setAssigneeId] = useState<string>('');
   const [boardId, setBoardId] = useState<number | ''>('');
   const [status, setStatus] = useState<Task['status']>('Backlog');
   const [priority, setPriority] = useState<Task['priority']>('Medium');
   const [submitting, setSubmitting] = useState(false);

   useEffect(() => {
      if (mode === 'edit' && task) {
         setTitle(task.title);
         setDescription(task.description);
         setAssigneeId(task.assignee?.id?.toString() ?? '');
         setBoardId(task.boardId);
         setStatus(task.status);
         setPriority(task.priority);
      } else if (mode === 'create') {
         setTitle('');
         setDescription('');
         setAssigneeId(task?.assignee?.id?.toString() ?? '');
         setBoardId(fixedBoard?.id ?? boards[0]?.id ?? '');
         setStatus('Backlog');
         setPriority('Medium');
      }
   }, [mode, task, users, boards]);

   const handleSubmit = async () => {
      setSubmitting(true);
      const selectedBoard = boards.find((b) => b.id === Number(boardId));
      const boardName = selectedBoard?.name ?? '';

      const payload = {
         title,
         description,
         assigneeId: Number(assigneeId),
         boardId: Number(boardId),
         boardName,
         status,
         priority,
      };

      try {
         if (mode === 'create') {
            await issuesApi.createIssue(payload);
         } else if (task) {
            const onlyStatusChanged =
               title === task.title &&
               description === task.description &&
               Number(assigneeId) === task.assignee?.id &&
               Number(boardId) === task.boardId &&
               priority === task.priority &&
               status !== task.status;

            if (onlyStatusChanged) {
               await issuesApi.updateIssueStatus(task.id, status);
            } else {
               await issuesApi.updateIssue(task.id, payload);
            }
         }
         closeModal();
      } catch (err) {
         console.error('Ошибка при сохранении задачи:', err);
      } finally {
         setSubmitting(false);
      }
   };

   return (
      <Box>
         <DialogTitle>{formTitle}</DialogTitle>

         <TaskFormFields
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            assigneeId={assigneeId}
            setAssigneeId={setAssigneeId}
            boardId={boardId}
            setBoardId={setBoardId}
            status={status}
            setStatus={setStatus}
            priority={priority}
            setPriority={setPriority}
            users={users}
            boards={boards}
            statuses={statuses}
            priorities={priorities}
            disableBoardSelect={disableBoardSelect}
         />

         {source === 'issue' && (
            <Box mt={1}>
               <Button
                  sx={{ ...buttonBaseStyle }}
                  onClick={() => navigate(`/board/${boardId}`)}
                  disabled={!boardId}
                  size="small"
                  variant="outlined"
               >
                  Перейти к доске
               </Button>
            </Box>
         )}

         <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
            <Button
               onClick={closeModal}
               disabled={submitting}
               sx={{ ...buttonBaseStyle, height: '40px' }}
            >
               Отмена
            </Button>
            <Button
               variant="contained"
               onClick={handleSubmit}
               disabled={submitting}
               sx={{ ...buttonBaseStyle, height: '40px' }}
            >
               {mode === 'create' ? 'Создать' : 'Сохранить'}
            </Button>
         </Box>
      </Box>
   );
};
