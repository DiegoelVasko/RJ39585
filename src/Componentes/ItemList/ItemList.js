import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Productos</h2>

      <div className="row p-2">
        {items.map((producto) => (
          <Item key={producto.id} item={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
