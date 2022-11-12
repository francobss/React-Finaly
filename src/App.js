import './App.css';
import {NavBar} from "./Components/NavBar/Navbar"
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Contact} from './Components/Contact/Contact'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import {EventoDefault} from './Components/EventosDefault/EventosDefault'
// import {PaginaContexto} from './Components/Temas/PaginaContext/PaginaContexto'
import {CartProvider} from './context/CartContext'
import {CartContainer} from './Components/CartContainer/CartContainer'



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/productos" element={<ItemListContainer/>}></Route>
            <Route path="/productos/:categoryId" element={<ItemListContainer/>}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
            <Route path="/contacto" element={<Contact/>}></Route>
            <Route path="/carrito" element={<CartContainer/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
