import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommonButton from "../components/Session/CommonButton.component";

export default function FormLogin(props) {
  return (
    <form role="form">
      <fieldset>
        <legend className="text-center header">LOGIN</legend>
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
            onClick={props.sessionButton}
            value={props.valueLogin}
            typeButton="success"
          ></CommonButton>
          &nbsp;
          <CommonButton
            onClick={props.noRegister}
            value={props.valueNoRegister}
            typeButton="danger"
          ></CommonButton>
        </div>
      </fieldset>
    </form>
  );
}
