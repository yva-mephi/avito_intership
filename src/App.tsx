import { MainPage } from './pages/main/MainPage';
import { BoardPage } from './pages/board/BoardPage';
import { BoardsPage } from './pages/boards/BoardsPage';
import { IssuePage } from './pages/issues/IssuePage';
import { Header } from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CreateIssueModal } from './components/header/CreateIssueModal';

function App() {
   const [modalOpen, setModalOpen] = useState(false);
   return (
      <Router>
         <Header onOpenModal={() => setModalOpen(true)} />
         <CreateIssueModal open={modalOpen} onClose={() => setModalOpen(false)} />

         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/boards" element={<BoardsPage />} />
            <Route path="/board/:id" element={<BoardPage />} />
            <Route path="/issues" element={<IssuePage />} />
         </Routes>
      </Router>
   );
}

export default App;
