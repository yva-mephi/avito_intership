import type { SxProps, Theme } from '@mui/material/styles';

export const buttonBaseStyle: SxProps<Theme> = {
   bgcolor: (theme) => theme.palette.secondary.main,
   '&:hover': {
      bgcolor: (theme) => theme.palette.secondary.dark,
      transform: 'translateY(-1px)',
   },
   color: 'white',
   width: '150px',
   height: '50px',
   borderRadius: 2,
   textTransform: 'none',
   fontSize: '17px',
   fontWeight: 600,
   transition: 'all 0.2s ease',
   boxShadow: 'none',
};

export const inputBaseStyle: SxProps<Theme> = {
   '& .MuiOutlinedInput-root': {
      borderRadius: 2,
      backgroundColor: (theme) => theme.palette.background.default,
      '&:hover .MuiOutlinedInput-notchedOutline': {
         borderColor: (theme) => theme.palette.secondary.dark,
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
         borderColor: (theme) => theme.palette.secondary.main,
         borderWidth: 2,
      },
   },
   '&.Mui-focused .MuiOutlinedInput-input': {
      color: (theme) => theme.palette.secondary.main,
      borderColor: (theme) => theme.palette.secondary.main,
   },
   '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'theme.palette.secondary.main',
   },
   '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: (theme) => theme.palette.secondary.dark,
   },
   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: (theme) => theme.palette.secondary.main,
      borderWidth: '2px',
   },
   '& label.Mui-focused': {
      color: (theme) => theme.palette.secondary.main,
      borderColor: (theme) => theme.palette.secondary.main,
   },
};
