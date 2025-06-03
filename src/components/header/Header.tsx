import { AppBar, Button, Container, IconButton, Toolbar, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import logo from '../../assets/logo_text.svg';
import { useTaskModal } from '../../context/TaskModalContext';

export const Header = () => {
   const { openModal } = useTaskModal();

   return (
      <AppBar position="static" color="primary" elevation={1}>
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <Box
                  display="grid"
                  gridTemplateColumns="1fr 1fr 1fr"
                  alignItems="center"
                  width="100%"
               >
                  <Box>
                     <RouterLink to="/">
                        <img src={logo} alt="Avito Tech" style={{ height: 30 }} />
                     </RouterLink>
                  </Box>

                  <Box display="flex" justifyContent="center" gap={4}>
                     <Button
                        component={RouterLink}
                        to="/boards"
                        color="inherit"
                        sx={{
                           fontSize: '1.1rem',
                           fontWeight: 600,
                           textTransform: 'none',
                           fontFamily: 'Product Sans, sans-serif',
                        }}
                     >
                        BOARDS
                     </Button>
                     <Button
                        component={RouterLink}
                        to="/issues"
                        color="inherit"
                        sx={{
                           fontSize: '1.1rem',
                           fontWeight: 600,
                           textTransform: 'none',
                           fontFamily: 'Product Sans, sans-serif',
                        }}
                     >
                        ALL ISSUES
                     </Button>
                  </Box>

                  <Box display="flex" justifyContent="flex-end">
                     <IconButton
                        color="secondary"
                        onClick={() =>
                           openModal('header', null, () => {
                              window.dispatchEvent(new Event('taskCreated'));
                           })
                        }
                        sx={{
                           bgcolor: (theme) => theme.palette.secondary.main,
                           '&:hover': {
                              bgcolor: (theme) => theme.palette.secondary.dark,
                           },
                           width: 40,
                           height: 40,
                        }}
                     >
                        <AddIcon sx={{ color: 'white' }} />
                     </IconButton>
                  </Box>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};
