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
                    <div className="cart card mx-auto mb-3  p-3 w-75"  key={prod.id}>
                        <div className="row g-0">
                            <div className="col-md-4">    
                                <img className="img-fluid rounded-start rounded" src={prod.img1} alt={prod.modelo}/>
                            </div>
                            <div className="col-md-8 p-3">
                                <h4 >{prod.modelo}</h4>
                                <p>Precio unitario: U$S{prod.precio} </p>
                                <p>Cantidad: {prod.cantidad}</p>
                                <p>Precio Total: U$S{prod.precio * prod.cantidad}</p>
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

            <h3>TOTAL: U$S{totalCompra().toFixed(2)}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carro</button>
            <Link className="btn btn-success" to="/checkout">Finalizar compra</Link>
        </div>
    )
}

export default Cart