import React from "react";
import CommonButton from "../components/Session/CommonButton.component";

export default function FormRegister(props) {
  return (
    <form role="form">
      <fieldset>
        <legend className="text-center header">Registro</legend>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={props.onChangeFormulario}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            name="password"
            onChange={props.onChangeFormulario}
          />
        </div>
        <div className="form-group">
          <br></br>
          <CommonButton
            onClick={props.register}
            value={props.valueRegister}
            typeButton="success"
          ></CommonButton>
          &nbsp;
          <CommonButton
            onClick={props.return}
            value={props.valueReturn}
            typeButton="danger"
          ></CommonButton>
        </div>
      </fieldset>
    </form>
  );
}
