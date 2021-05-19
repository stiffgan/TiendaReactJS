import { Link } from "react-router-dom";
import { useEffect, useMemo, memo } from "react";
import "./ItemProduct.component.css";

function ItemProduct(props) {
  useEffect(() => {
    console.log(`Hemos renderizado Item producto`);
  });

  let abrirProducto = (obj) => {
    console.log(`Hemos renderizado la función abrirProducto`);
    return {
      pathname: "/Product/" + obj.id,
      state: {
        id: obj.id,
        image: obj.image,
        title: obj.title,
        price: obj.price,
        category: obj.category,
        description: obj.description,
      },
    };
  };

  return (
    <div key={props.id} className="col-md-3 padding-row">
      <div className="card">
        <span className="img-card">
          <img src={props.image}></img>
        </span>

        <div className="card-body">
          <p className="card-text">{props.title}</p>

          <Link to={abrirProducto(props)}>
            <a href="#" className="btn btn-primary">
              Ir a producto
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(ItemProduct);
