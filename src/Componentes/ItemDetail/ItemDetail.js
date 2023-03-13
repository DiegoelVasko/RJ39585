import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import Card from "react-bootstrap/Card";


const ItemDetail = ({item}) => {
    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
            
        }

        console.log(newItem)
    }

    return (
        <Card className="producto">
            <Card.Img variant="top" src={item.img1} alt={item.name} />
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
                <button onClick={handleVolver}>Volver</button>
            </Card.Body>
        </Card>
                    
    )
}

export default ItemDetail