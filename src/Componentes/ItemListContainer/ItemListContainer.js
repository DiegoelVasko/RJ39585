import { useEffect } from "react"
import { useState } from "react"
import './ItemListContainer.scss'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
const ItemListContainer = () => {
  
  const [productos, setProductos] = useState ([])
  const [loading, setLoading] = useState ([true])
  
  const { categoryId} = useParams()

  useEffect (() => {
    setLoading (true)

    pedirDatos()
       .then((response) =>{
          if (!categoryId){
            setProductos(response)
          }else{
            setProductos ( response.filter((prod) => prod.category === categoryId) )
          }
       })
       .catch((error) =>{
          console.log(error)
       })
       .finally(() =>{
          setLoading(false)
       }) 
  }, [categoryId])
  
  return (
    <div className="contenedorProductos">
      {
        loading
          ? <h2>Cargando productos...</h2>
          : <ItemList items={productos}/>
      }

    </div>
  );
};

export default ItemListContainer;
