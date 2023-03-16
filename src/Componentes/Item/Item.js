import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ item }) => {
  return (
    <Card className="w-25 m-1  bg-light">
      <Card.Img variant="top" src={item.img1} alt={item.name} />
      <Card.Body>
        <Card.Text>Marca: {item.marca}</Card.Text>
        <Card.Title>{item.modelo}</Card.Title>
        <Card.Text>Precio: U$S{item.precio}</Card.Text>
        <Link to={`/detail/${item.id}`}>Ver más</Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
