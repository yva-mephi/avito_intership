import { MenuItem, TextField } from '@mui/material';
import type { Board } from '@/types/boardType';
import { inputBaseStyle } from '@/styles/FormStyles';
interface Props {
   boards: Board[];
   boardId: number | '';
   setBoardId: (value: number) => void;
   disabled?: boolean;
}

export const BoardSelect = ({ boards, boardId, setBoardId, disabled }: Props) => {
   return (
      <TextField
         sx={{ ...inputBaseStyle }}
         select
         label="Доска"
         value={boardId}
         onChange={(e) => setBoardId(Number(e.target.value))}
         fullWidth
         disabled={disabled}
      >
         {boards.map((board) => (
            <MenuItem key={board.id} value={board.id}>
               {board.name}
            </MenuItem>
         ))}
      </TextField>
   );
};
