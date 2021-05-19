import "./Store.page.css";
import React, { useState, useEffect, useContext } from "react";
import { GET } from "../../services/http.service";
import ItemProduct from "../../components/ItemProduct/ItemProduct.component";
import { useSelector, useDispatch } from "react-redux";
import { cargarListado, guardarListado } from "../../redux/actions";
import Context from "../../context";
import { DELETE_PRODUCTOS, ADD_PRODUCTOS } from "../../context/reducers";

export default function Store() {
  const listado = useSelector((state) => state);
  const dispatch = useDispatch();
  // Método 'reducer' para vaciar la lista de productos.

  let deleteProducts = () => {
    dispatch({ type: DELETE_PRODUCTOS });
  };

  // Método 'reducer' para actualizar la lista de productos.
  let addProducts = (newProducts) => {
    dispatch({ type: ADD_PRODUCTOS, payload: newProducts });
  };
  const context = useContext(Context);

  /** Métodos del ciclo de vida */
  useEffect(() => {
    // Usamos esta notación para abreviar, pero es equivalente a:
    // GET('products/').then((products) => context.addProducts(products));
    GET("https://fakestoreapi.com/products/").then(context.addProducts);
  }, []);

  // if(listado == '')
  // {
  //     GET('https://fakestoreapi.com/products')
  //     .then(data => {
  //         dispatch(guardarListado(data));
  //     })
  //     .catch(error => {
  //         console.error("❌ Algo ha ido mal con la petición...", error);
  //     });

  // }

  // var arr = [];
  // Object.keys(listado).forEach(function(key) {
  // arr.push(listado[key]);
  // });

  return (
    <Context.Consumer>
      {(context) => (
        <div className="container">
          <div className="row">
            {context.products.map((item) => {
              return (
                <ItemProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      )}
    </Context.Consumer>
  );
}
