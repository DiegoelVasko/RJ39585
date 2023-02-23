import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import Navbar from "./Componentes/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
