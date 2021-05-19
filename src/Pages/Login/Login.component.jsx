import React, { useState } from "react";
import { useReducer } from "react";
import { reducerLogin } from "../../context/reducersLogin";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import FormLogin from "../../views/FormLogin.view";
import FormRegister from "../../views/FormRegister.view";
import { loginSession } from "../../redux/actions/session";
import "./Login.component.css";

export default function Login() {
  // const [reduce, dispatch] = useReducer(reducerLogin, reducerLogin())

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLogin, setFormlogin] = useState(true);

  let history = useHistory();

  const sessionButton = (event) => {
    event.preventDefault();

    var jsonUser = JSON.parse(localStorage.getItem(email));

    if (jsonUser != null && jsonUser.password == password) {
      loginSuccess(jsonUser);
    } else {
      alert("Datos de acceso incorrecto");
    }
  };

  let setFormulario = (event) => {
    var name = event.target.name;
    var value = event.target.value;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  let setReturn = (event) => {
    event.preventDefault();
    setFormlogin(true);
    history.push("/");
  };
  let setNoRegister = () => {
    setFormlogin(false);
    setEmail("");
    setPassword("");
    history.push("/");
  };

  let setRegister = (event) => {
    event.preventDefault();

    if (!validarEmail(email)) {
      alert("Email con formato no válido");
      return;
    }

    if (password.length < 5) {
      alert("La contraseña debe de tener un mínimo de 5 caracteres");
      return;
    }

    var result = JSON.parse(localStorage.getItem(email));

    if (result == null) {
      var jsonUser = { email: email, password: password };
      localStorage.setItem(email, JSON.stringify(jsonUser));
      loginSuccess(jsonUser);
    } else {
      alert("El usuario introducido ya existe");
      return;
    }
  };

  function loginSuccess(json) {
    dispatch(loginSession());
    history.push("/store");
  }

  function validarEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
  }

  if (formLogin) {
    return (
      <div className="container">
        <div className="row padding-row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <FormLogin
              sessionButton={sessionButton}
              onChangeFormulario={setFormulario}
              noRegister={setNoRegister}
              valueNoRegister="No tengo usuario"
              valueLogin="Iniciar sesión"
            ></FormLogin>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row padding-row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <FormRegister
              onChangeFormulario={setFormulario}
              register={setRegister}
              return={setReturn}
              valueRegister="Registrar"
              valueReturn="Volver"
            ></FormRegister>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}
