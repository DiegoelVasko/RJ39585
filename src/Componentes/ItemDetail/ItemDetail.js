import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import {CartContext} from "../../context/CartContext" 
import"./ItemDetail.scss"
import LowStockMsg from "./LowStockMsg"



const ItemDetail = ({ item }) => {
  const { agregarAlCarrito, isInCart} = useContext(CartContext)

  const [cantidad, setCantidad] = useState(1)
  const navigate = useNavigate()
 
  

  const handleVolver = () => {
    navigate(-1);
  };

  const handleAgregar = () => {
    const newItem = {
      ...item,
      cantidad,
    };

    agregarAlCarrito(newItem)
  };



  return (
    <article className="detalleProducto m-3 p-2 rounded">
      <div className="row">
        <img
          className="w-25 "
          src={item.img1}
          alt={item.modelo}
        />
        <img
          className="w-25 "
          src={item.img2}
          alt={item.modelo}
        />
        <img
          className="w-25 "
          src={item.img3}
          alt={item.modelo}
        />
        <img
          className="w-25 "
          src={item.img4}
          alt={item.modelo}
        />
      </div>
      <div className="container my-3">
        <h4 className="m-2 text-end  text-decoration-underline">Marca: {item.marca}</h4>
        <h2 className="m-2 ">Modelo: {item.modelo}</h2>
        <p className="m-2 ">{item.descripcion}</p>
        <p className="m-2 text-end">Precio: U$S{item.precio}</p>
        {item.stock <=3 && <LowStockMsg stock={item.stock}/>}

        
        
        { isInCart(item.id)
            ? <Link to="/cart" className="btn">Finalizar Compra</Link>
            : <ItemCount 
                max={item.stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
              />
        }
        <br/>
        <button onClick={handleVolver} className="btn btn-outline-dark justify-content-end">
          Volver
        </button>
      </div>
    </article>
  );
};

export default ItemDetail;
