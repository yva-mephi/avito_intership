import { TextField } from '@mui/material';
import { inputBaseStyle } from '@/styles/FormStyles';

interface Props {
   title: string;
   setTitle: (value: string) => void;
}

export const TitleField = ({ title, setTitle }: Props) => {
   return (
      <TextField
         label="Название задачи"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         fullWidth
         required
         sx={{ ...inputBaseStyle }}
      />
   );
};
