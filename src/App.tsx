import { MainPage } from './pages/main/MainPage';
import { BoardPage } from './pages/board/BoardPage';
import { BoardsPage } from './pages/boards/BoardsPage';
import { IssuePage } from './pages/issues/IssuePage';
import { Header } from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskModalProvider } from './context/TaskModalContext';
import { TaskLogic } from './components/taskForm/TaskLogic';
import { Box } from '@mui/material';

function App() {
   return (
      <Router>
         <TaskModalProvider>
            <Box display="flex" flexDirection="column" height="100vh">
               <Header />
               <TaskLogic />
               <Box flex={1} overflow={location.pathname === '/' ? 'hidden' : 'auto'}>
                  <Routes>
                     <Route path="/" element={<MainPage />} />
                     <Route path="/boards" element={<BoardsPage />} />
                     <Route path="/board/:id" element={<BoardPage />} />
                     <Route path="/issues" element={<IssuePage />} />
                  </Routes>
               </Box>
            </Box>
         </TaskModalProvider>
      </Router>
   );
}

export default App;
