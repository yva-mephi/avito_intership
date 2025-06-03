import { MenuItem, TextField } from '@mui/material';
import type { User } from '@/types/userType';
import { inputBaseStyle } from '@/styles/FormStyles';
interface Props {
   users: User[];
   assigneeId: string;
   setAssigneeId: (value: string) => void;
}

export const AssigneeSelect = ({ users, assigneeId, setAssigneeId }: Props) => {
   return (
      <TextField
         sx={{ ...inputBaseStyle }}
         select
         label="Исполнитель"
         value={assigneeId}
         onChange={(e) => setAssigneeId(e.target.value)}
         fullWidth
      >
         <MenuItem value="">Не назначено</MenuItem>
         {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
               {user.fullName}
            </MenuItem>
         ))}
      </TextField>
   );
};
