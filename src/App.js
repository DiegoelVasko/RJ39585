import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./Componentes/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shoetester from "./Componentes/ShoeTester/ShoeTester";
import Contacto from "./Componentes/Contacto/Contacto";





function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
          <Route path="/" element={<ItemListContainer/>} />      
          <Route path="/produtos/:categoryId" element={<ItemListContainer/>} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/shoetester" element={<Shoetester/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="*" element={<Navigate to="/" /> } />
      </Routes>
    
    </BrowserRouter>  
  );
}

export default App;
