import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);

  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((response) => {
        if (!categoriaId) {
          setProductos(response);
        } else {
          setProductos(
            response.filter((prod) => prod.categoria === categoriaId)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId]);

  return (
    <div className="container">
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : (
        <ItemList items={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
