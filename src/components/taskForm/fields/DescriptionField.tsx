import { TextField } from '@mui/material';
import { inputBaseStyle } from '@/styles/FormStyles';

interface Props {
   description: string;
   setDescription: (value: string) => void;
}

export const DescriptionField = ({ description, setDescription }: Props) => {
   return (
      <TextField
         sx={{ ...inputBaseStyle }}
         label="Описание"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         fullWidth
         multiline
         minRows={3}
      />
   );
};
