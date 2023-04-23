const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {
  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="d-flex justify-content-end align-self-center">
      <button
        onClick={handleRestar}
        className={`btn btn-outline-secondary btn-sm ${cantidad === 1 ? "btn-outline-danger" : "btn-outline-primary"}`}

        disabled={cantidad === 1}
      >
        -
      </button>

      <span className="m-2">{cantidad}</span>
      
      <button
        onClick={handleSumar}
        className={`btn btn-outline-secondary btn-sm {cantidad === max ? "btn btn-danger" : "btn btn-primary"}`}
        disabled={cantidad === max}
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
