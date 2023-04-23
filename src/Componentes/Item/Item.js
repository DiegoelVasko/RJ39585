
import { Link } from "react-router-dom";
import "./Item.scss";
 
const Item = ({ item }) => {
  return (
    <div className="item col-3 p-3 mx-auto border border-3 rounded ">
      <img className="img-fluid mx-auto rounded" src={item.img1} alt={item.modelo} />
      <div>
        <p className="text-end my-2 text-decoration-underline">{item.marca}</p>
        <h5>{item.modelo}</h5>
        <p className="my-2">Precio: U$S{item.precio}</p>
        <Link to={`/detail/${item.id}`} className="float-end">Ver más</Link>
      </div>
    </div>
  );
};

export default Item;
