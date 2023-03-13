const ItemCount = ({ max, antidad, setCantidad, handleAgregar }) => {
  const handlerSumar = () => {
    cantidad < max && setCantidad(cantidad + 1);
  };

  const handlerRestar = () => {
    cantidad > 1 && setCantidad(cantidad + 1);
  };

  return (
    <div>
      <button onClick={handlerRestar}>-</button>
      <span>{cantidad}</span>
      <button onClick={handlerSumar}>+</button>
      <button onClick={handleAgregar}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
