import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import DefaultPage from 'components/DefaultPage';
import Projects from 'pages/projects';
import Posts from 'pages/posts';
import About from 'pages/about';
import Cards from 'pages/card';
import Footer from 'components/footer';



export default function AppRoutes() {
  return (
    <main>
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
      <Footer/>
    </main>
  );
}
