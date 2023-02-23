import Card from "react-bootstrap/Card";

export const Productos = (props) => {
  return (
    <Card className="producto">
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Text>Marca: {props.marca}</Card.Text>
        <Card.Title>Modelo: {props.model}</Card.Title>
        <Card.Text>Precio: U$S{props.precio}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Productos;
