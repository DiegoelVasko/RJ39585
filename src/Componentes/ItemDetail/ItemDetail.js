import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ item }) => {
 
  const [cantidad, setCantidad] = useState(1);
  const navigate = useNavigate();

  const handleVolver = () => {
    navigate(-1);
  };

  const handleAgregar = () => {
    const ItemToCart = {
      ...item,
      cantidad,
    };

    console.log(ItemToCart);
  };

  return (
    <Card className="producto mx-5">
      <div className="row">
        <Card.Img
          variant="top"
          className="w-25 m-5 border rounded"
          src={item.img1}
          alt={item.name}
        />
        <Card.Img
          variant="top"
          className="w-25 m-5 border rounded"
          src={item.img2}
          alt={item.name}
        />
        <Card.Img
          variant="top"
          className="w-25 m-5 border rounded"
          src={item.img3}
          alt={item.name}
        />
        <Card.Img
          variant="top"
          className="w-25 m-5 border rounded"
          src={item.img4}
          alt={item.name}
        />
      </div>
      <Card.Body>
        <Card.Text>Marca: {item.marca}</Card.Text>
        <Card.Title>Modelo: {item.modelo}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
        <Card.Text>Precio: U$S{item.precio}</Card.Text>
        <ItemCount
          max={item.stock}
          cantidad={cantidad}
          setCantidad={setCantidad}
          handleAgregar={handleAgregar}
        />
        <button onClick={handleVolver} className="btn btn-outline-dark mx-2">
          Volver
        </button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
