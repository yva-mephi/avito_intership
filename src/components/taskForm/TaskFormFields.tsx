import { Stack } from '@mui/material';
import type { Task } from '@/types/taskType';
import type { User } from '@/types/userType';
import type { Board } from '@/types/boardType';
import { TitleField } from './fields/TitleField';
import { DescriptionField } from './fields/DescriptionField';
import { AssigneeSelect } from './fields/AssigneeSelect';
import { BoardSelect } from './fields/BoardSelect';
import { StatusSelect } from './fields/StatusSelect';
import { PrioritySelect } from './fields/PrioritySelect';

interface Props {
   title: string;
   setTitle: (value: string) => void;
   description: string;
   setDescription: (value: string) => void;
   assigneeId: string;
   setAssigneeId: (value: string) => void;
   boardId: number | '';
   setBoardId: (value: number) => void;
   status: Task['status'];
   setStatus: (value: Task['status']) => void;
   priority: Task['priority'];
   setPriority: (value: Task['priority']) => void;
   users: User[];
   boards: Board[];
   statuses: Task['status'][];
   priorities: Task['priority'][];
   disableBoardSelect?: boolean;
}

export const TaskFormFields = ({
   title,
   setTitle,
   description,
   setDescription,
   assigneeId,
   setAssigneeId,
   boardId,
   setBoardId,
   status,
   setStatus,
   priority,
   setPriority,
   users,
   boards,
   statuses,
   priorities,
   disableBoardSelect,
}: Props) => {
   return (
      <Stack spacing={2}>
         <TitleField title={title} setTitle={setTitle} />
         <DescriptionField description={description} setDescription={setDescription} />
         <AssigneeSelect users={users} assigneeId={assigneeId} setAssigneeId={setAssigneeId} />
         <BoardSelect
            boards={boards}
            boardId={boardId}
            setBoardId={setBoardId}
            disabled={disableBoardSelect}
         />
         <StatusSelect status={status} setStatus={setStatus} statuses={statuses} />
         <PrioritySelect priority={priority} setPriority={setPriority} priorities={priorities} />
      </Stack>
   );
};
