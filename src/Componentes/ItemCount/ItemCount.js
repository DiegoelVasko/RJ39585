const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {
  const handlerSumar = () => {
    cantidad < max && setCantidad(cantidad + 1);
  };

  const handlerRestar = () => {
    cantidad > 1 && setCantidad(cantidad + 1);
  };

  return (
    <div className="my-2">
      <button
        onClick={handlerRestar}
        className="btn btn-outline-secondary btn-sm "
      >
        -
      </button>
      <span className="mx-1">{cantidad}</span>
      <button
        onClick={handlerSumar}
        className="btn btn-outline-secondary btn-sm "
      >
        +
      </button>
      <button
        onClick={handleAgregar}
        className="btn btn-outline-secondary mx-2"
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
