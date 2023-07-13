import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import DefaultPage from 'components/DefaultPage';
import Projects from 'pages/projects';
import Posts from 'pages/posts';
import About from 'pages/about';



export default function AppRoutes() {
  return (
    <main>
      <Router>

        <Routes>
          <Route path='/' element={<DefaultPage />} >
            <Route index element={<Home/>}/>
            <Route path="/projetos" element={<Projects/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/sobre" element={<About/>}/>

          </Route>

        </Routes>
      </Router>
    </main>
  );
}
