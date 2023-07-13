import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from 'components/DefaultPage';



export default function AppRoutes() {
  return (
    <main>
      <Router>
        
        <Routes>
          <Route path='/' element={<DefaultPage />} />
        </Routes>
      </Router>
    </main>
  );
}
