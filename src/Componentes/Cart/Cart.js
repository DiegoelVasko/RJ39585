import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import "./Cart.scss"


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
                cart.map((prod) => (
                    <div className="cart card  mb-3 text-bg-info p-3"  key={prod.id}>
                        <div className="row g-0">
                            <div className="col-md-4">    
                                <img className="img-fluid rounded-start" src={prod.img1} alt={prod.modelo}/>
                            </div>
                            <div className="col-md-8">
                                <h4>{prod.modelo}</h4>
                                <small>Precio unitario: ${prod.precio} </small>
                                <small>Cantidad: {prod.cantidad}</small>
                                <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                                <button 
                                    onClick={() => eliminarDelCarrito(prod.id) } 
                                    className="btn btn-danger"
                                >
                                    <BsFillTrashFill/>
                                </button>
                            </div>    
                        </div>    
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