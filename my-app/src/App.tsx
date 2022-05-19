import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Typecourse from './typecourse/Typecourse';
import Header from './baseLayout/Header';
import HeaderContext from './context/HeaderContext';
import ProductsContext from './context/ProductsContext';
import Products from './components/products/Products';
import Wheel from './components/Wheel/Wheel';
import PaletteApp from './ColorProject/PaletteApp';




function App() {
  
  const add = (a:number, b:number):void => {
    
    
  }

  const tel:(number|string|Date)[]  = [3,3,3,"dsa",new Date()]
  


 
  return (
    <div className="App">
      <ProductsContext>

      <HeaderContext>

        {/* <Header></Header> */}
        {/* <Products/> */}
        {/* <Typecourse/> */}
        {/* <TodoList/>  */}
        {/* <Wheel/> */}
        <PaletteApp />
      </HeaderContext>
      </ProductsContext>
    </div>
  );
}

export default App;
