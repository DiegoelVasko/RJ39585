import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./Componentes/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./Componentes/Cart/Cart";
import Checkout from "./Componentes/Checkout/Checkout";
import Shoetester from "./Componentes/ShoeTester/ShoeTester";
import Contacto from "./Componentes/Contacto/Contacto";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoriaId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/checkout" element={ <Checkout />} />
          <Route path="/shoetester" element={<Shoetester />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
