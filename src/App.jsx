import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import About from "./Pages/About/About.page";
import Store from "./Pages/Store/Store.page";
import Product from "./Pages/Product/Product.page";
import Nav from "./components/Nav/Nav.component";
import "./App.css";
import { useState } from "react";
import logo from "./logo.svg";
import Context from "./context";
import Login from "./Pages/Login/Login.component";
import { ProtectedRoute } from "./components/Routes/ProtectedRoute.component";
import { useSelector, useDispatch } from "react-redux";
import { loginSession } from "../src/redux/actions/session";
import CommonButton from "./components/Session/CommonButton.component";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();

  // Estado inicial a enviarle al contexto, creado con hooks
  // ya que estamos trabajando con componentes de función.
  const [products, setProducts] = useState([]);
  const [isLogged, setLogged] = useState(true);

  // Método 'reducer' para vaciar la lista de productos.
  let deleteProducts = () => setProducts([]);

  // Método 'reducer' para actualizar la lista de productos.
  let addProducts = (newProducts) => setProducts(newProducts);

  const sessionButton = (event) => {
    dispatch(loginSession());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ReactJS | Imagina Formación</h1>
      </header>
      <Context.Provider
        className="App"
        value={{
          products: products,
          addProducts: addProducts,
          deleteProducts: deleteProducts,
        }}
      >
        <Router>
          {/* <Nav /> */}
          {session ? <Nav /> : ""}

          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/about" component={About} />
            <ProtectedRoute exact path="/store" component={Store} />
            {/* <Route path="/about"> 
              {isLogged ? <About /> : <Redirect to='/'/>}
            </Route> */}
            <Route path="/product/:id" component={Product}></Route>

            <Redirect
              from="/**"
              to={{
                pathname: "/",
                state: {
                  badURL: true,
                },
              }}
            />
          </div>
        </Router>
      </Context.Provider>
    </div>
  );
}
