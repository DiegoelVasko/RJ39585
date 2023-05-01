import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { dataBase } from "../../firebase/config"
import { collection, addDoc, getDoc, updateDoc, doc } from "firebase/firestore"






const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [ordenId, setOrdenId] = useState(null)

    const [values, setValues] = useState({
        nombre:'',
        direccion: '',
        telefono:'', 
        email: ''
    })

    const handleInputChange = (e) => {
    
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit= (e) => {
        e.preventdefault()

        if (values.nombre.length < 3){
            alert("Nombre invalido")
            return
        }
        if (values.direccion.length < 3){
            alert("Direccion invalida")
            return
        }
        if (values.telefono.length < 10){
            alert("Telefono invalido")
            return
        }        
        if (values.email.length < 3){
            alert("Mail invalido")
            return
        }
        const orden = {
            cliente: values, 
            items: cart.map((prod) => ({id: prod.id, modelo: prod.modelo, precio: prod.precio, cantidad: prod.cantidad })),
            total: totalCompra(),
            fecha: new Date()
        }


        console.log("Submit", orden)


        const productosRef = collection( dataBase, 'productos')

        cart.forEach((item) => {
            const docRef = doc(productosRef, item.id ) 
            
            getDoc(docRef)
                .then((doc) =>{
                    
                    if(doc.data().stock >= item.cantidad) {
                        updateDoc(docRef,{
                            stock: doc.data().stock - item.cantidad
                        })
                    }else {
                        alert(item.modelo + " sin stock.")
                    }
                }) 
        })


        const ordenesRef = collection( dataBase, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc) => {
                setOrdenId(doc.id)
                vaciarCarrito()
            })
    }

    if(ordenId) {
        return(
            <div className="container  my-5">
                <h2>Orden registrada</h2>
                <p>Tu nro de  orden {ordenId} será enviada a tu mail</p>
            </div>
        )
    }


    if (cart.length === 0)
        return <Navigate to="/"/>

    return (
        <div className="container my-5 ">
            <h2 className="pb-3">Ingresa tus datos para contactarnos</h2>

            <form onSubmit={handleSubmit}>
                <input
                onChange={handleInputChange}
                value={values.nombre} 
                type={'text'}
                placeholder= 'Nombre'
                className="form-control my-2 bg-light w-75 mx-5"
                name="nombre"
                />
                <input
                onChange={handleInputChange}
                value={values.direccion} 
                type={'text'}
                placeholder= 'Direccion'
                className="form-control my-2 bg-light w-75 mx-5"
                name="direccion"
                />
                <input
                onChange={handleInputChange}
                value={values.telefono} 
                type={'text'}
                placeholder= 'Telefono'
                className="form-control my-2 bg-light w-75 mx-5"
                name="telefono"
                />
                <input
                onChange={handleInputChange}
                value={values.email} 
                type={'email'}
                placeholder= 'Email'
                className="form-control my-2 bg-light w-75 mx-5"
                name="email"
                />
                <button className="btn btn-secondary" type="submit">Enviar</button>
            </form>

        </div>    


    
    )
}
export default Checkout