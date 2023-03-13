import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import Navbar from "./Componentes/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";





function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
          <Route path="/" element={<ItemListContainer/>} />      
          <Route path="/produtos/:categoryId" element={<ItemListContainer/>} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
          <Route path="/" element={</>} />
          <Route path="/" element={</>} />
          <Route path="*" element={<Navigate to="/" /> } />
      </Routes>
    
    </BrowserRouter>  
  );
}

export default App;
