
import ReactDOM from 'react-dom';


import {BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App'
import Home from './routes/Home';
import Pokemons from './routes/Pokemons';
import Pokecard from './routes/Pokecard';

import NotFound from './routes/NotFound'
import About from './routes/About';
import Blog from './routes/Blog';
import Post from './routes/Post';


ReactDOM.render(
  <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />  
            <Route path="pokemons" element={<Pokemons />} />
            <Route path="pokecard/:parname" element={<Pokecard />}  />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Post />}  />
            <Route path="*" element={<NotFound />} />
          </Route>       
        </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);


