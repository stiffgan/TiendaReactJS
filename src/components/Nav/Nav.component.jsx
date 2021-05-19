import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Nav.component.css";
import CommonButton from "../Session/CommonButton.component";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginSession } from "../../redux/actions/session";

export default function Nav() {
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const [esDeDia, setDia] = useState(true);

  let history = useHistory();

  let cambiarColor = () => {
    setDia(!esDeDia);
    let bgcolor = !esDeDia ? "transparent" : "#282c34";
    document.body.style = "background:" + bgcolor;
  };

  let texto = esDeDia ? (
    <div>
      Cambiar a modo nocturno <FontAwesomeIcon icon={faMoon} />
    </div>
  ) : (
    <div>
      Cambiar a modo diurno <FontAwesomeIcon icon={faSun} />
    </div>
  );

  const sessionButton = (event) => {
    dispatch(loginSession());
    history.push("/");
  };
  return (
    <div className="container">
      <div
        className="Nav"
        style={{ backgroundColor: esDeDia ? "transparent" : "#282c34" }}
      >
        <Link className="Nav-link" to="/store">
          <button className="btn btn-secondary">Store </button>
        </Link>
        <Link className="Nav-link" to="/about">
          <button className="btn btn-secondary">About </button>
        </Link>
        {session ? (
          <button
            className="btn btn-secondary Nav-link"
            onClick={sessionButton}
          >
            Cerrar sesión
          </button>
        ) : (
          ""
        )}

        <button className="btn btn-secondary Nav-link" onClick={cambiarColor}>
          {texto}
        </button>
      </div>
    </div>
  );
}
