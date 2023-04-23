import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"


const Cart = () => {

    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carro esta vacío</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Ver productos</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Mi carro</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.modelo}</h4>
                        <img src={item.img1} alt={item.modelo}/>
                        <small>Precio unitario: ${item.precio} </small>
                        <small>Cantidad: {item.cantidad}</small>
                        <p>Precio Total: ${item.precio * item.cantidad}</p>
                        <button 
                            onClick={() => eliminarDelCarrito(item.id) } 
                            className="btn btn-danger"
                        >
                            <BsFillTrashFill/>
                        </button>
                        <hr/>
                    </div>
                ))
            }

            <h3>TOTAL: ${totalCompra().toFixed(2)}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carro</button>
            <Link className="btn btn-success" to="/checkout">Finalizar compra</Link>
        </div>
    )
}

export default Cart