import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import DefaultPage from 'components/DefaultPage';
import Projects from 'pages/projects';
import Posts from 'pages/posts';
import About from 'pages/about';
import Cards from 'pages/card';
import Footer from 'components/footer';
import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';



export default function AppRoutes() {
  const { theme } = useContext(ThemeContext);
  let background = '#fdfdfd';

  if (theme === 'dark') {
    background = '#1E1E2E';
  }

  return (
    <main style={{ backgroundColor: `${background}`, transition:'all 100ms ease-in-out' }} >
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/pages' element={<DefaultPage />} >
            <Route index element={<Projects />} />
            <Route path="/pages/posts" element={<Posts />} />
            <Route path="/pages/sobre" element={<About />} />
          </Route>

          <Route path={'/card/:id/*'} element={<Cards />} />

        </Routes>
      </Router>
      <Footer />
    </ main>
  );
}
