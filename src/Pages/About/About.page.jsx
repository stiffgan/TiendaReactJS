import { useReducer } from "react";
import {
  reducerTareas,
  initialState,
  ADD_TAREA,
  DELETE_TAREA,
} from "../../context/reducers";
import React, { useState } from "react";

export default function About() {
  const [tareas, dispatch] = useReducer(reducerTareas, initialState);

  const [mensaje, setMensaje] = useState("");

  return (
    <div className="About">
      <h1>Sobre la tienda</h1>
    </div>
  );
}
