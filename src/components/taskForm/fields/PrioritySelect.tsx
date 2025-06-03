import { MenuItem, TextField } from '@mui/material';
import type { Task } from '@/types/taskType';
import { inputBaseStyle } from '@/styles/FormStyles';

interface Props {
   priority: Task['priority'];
   setPriority: (value: Task['priority']) => void;
   priorities: Task['priority'][];
}

export const PrioritySelect = ({ priority, setPriority, priorities }: Props) => {
   return (
      <TextField
         sx={{ ...inputBaseStyle }}
         select
         label="Приоритет"
         value={priority}
         onChange={(e) => setPriority(e.target.value as Task['priority'])}
         fullWidth
      >
         {priorities.map((p) => (
            <MenuItem key={p} value={p}>
               {p}
            </MenuItem>
         ))}
      </TextField>
   );
};
