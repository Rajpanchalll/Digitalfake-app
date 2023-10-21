import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Category from './Components/Category';
import Products from './Components/Products';
import Createusers from './Components/Createusers';



function App() {

  
  //   }
    return (

    <div>

<BrowserRouter>
        <Routes>
          <Route path='/' />
          <Route path='/home' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/products' element={<Products />} />
          <Route path='/createusers' element={<Createusers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
