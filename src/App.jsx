import React from 'react';
// import TestFetch from './components/TestFetch';
// import Third from './components/Third';
// import Form from './components/Form';
// import Reducer from './components/Reducer';
// import CustomHook from './components/CustomHook';
// import Lifecycle from './components/Lifecycle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Error from './Pages/Error';
import SharedLayout from './Pages/SharedLayout';
import SingleProduct from './Pages/SingleProduct';

function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About />}/>
          <Route path='products' element={<Products />}/>
          <Route path='products/:productId' element={<SingleProduct />}/>
          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>
     {/* <TestFetch/>
     <Third/> */}
     {/* <Form/> */}
     {/* <Reducer/> */}
     {/* <CustomHook/> */}
     {/* <Lifecycle /> */}
    </BrowserRouter>
  );
}

export default App;
