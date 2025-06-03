import { MenuItem, TextField } from '@mui/material';
import type { Task } from '@/types/taskType';
import { inputBaseStyle } from '@/styles/FormStyles';
interface Props {
   status: Task['status'];
   setStatus: (value: Task['status']) => void;
   statuses: Task['status'][];
}

export const StatusSelect = ({ status, setStatus, statuses }: Props) => {
   return (
      <TextField
         sx={{ ...inputBaseStyle }}
         select
         label="Статус"
         value={status}
         onChange={(e) => setStatus(e.target.value as Task['status'])}
         fullWidth
      >
         {statuses.map((s) => (
            <MenuItem key={s} value={s}>
               {s}
            </MenuItem>
         ))}
      </TextField>
   );
};
