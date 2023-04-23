import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState([true]);

  const { categoriaId } = useParams();
  const {marcaId}= useParams()

  useEffect(() => {
    setLoading(true);

    const productosRef =collection(dataBase, "productos")

    const q = categoriaId
        ?query(productosRef, where("categoria", "==", categoriaId), where("marca", "==", marcaId ))
        : productosRef
    
    
    getDocs(q)
      .then((res) =>{
        const docs = res.docs.map((doc) =>{
            return {...doc.data() , id: doc.id}
        })
        setProductos(docs)
      }) 
    .finally (() => {
      setLoading(false)
    }) 

  }, [categoriaId]);

  return (
    <div className="container-fluid">
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : (
        <ItemList items={productos} />
      )}
    </div>
  );
};

export default ItemListContainer;
