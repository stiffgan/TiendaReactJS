import "./Product.page.css";

export default function Product(props) {
  let { image, title, price, category, description } =
    props.history.location.state;

  return (
    <div className="container">
      <div className="row">
        <div className="product">
          <div className="header">
            <span className="category">{category} / </span>
            <span className="title">{title}</span>
          </div>
          <br></br>
          <div className="contenedor-img">
            <div className="img">
              <img src={image} width="70%"></img>
            </div>
            <div className="detail">
              <div height="50%">
                <p className="description">{description}</p>
              </div>
              <div height="50%">
                <p className="price">{price} €</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
