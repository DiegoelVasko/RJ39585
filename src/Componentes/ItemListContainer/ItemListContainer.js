import "../ItemListContainer/itemListContainer.scss";
import Productos from "../Items/Items";

const ItemListContainer = () => {
  return (
    <div className="contenedorCalzados">
      <h2 className="calzados">Calzados</h2>
      <article className="contenedorProductos">
        <Productos
          marca="ADIDAS"
          modelo="HARDEN VOL.6 'HIGHLIGHTER'"
          precio={140}
        />

        <Productos
          marca="JORDAN"
          modelo="Air Jordan 36 'Black Infrared'"
          precio={185}
        />
        <Productos
          marca="NIKE"
          modelo="LEBRON 19 'MINNEAPOLIS LAKERS'"
          precio={149.99}
        />
        <Productos
          marca="NEW BALANCE"
          modelo="KAWHI 'POWER SOURCE'"
          precio={160}
        />
      </article>
    </div>
  );
};

export default ItemListContainer;
