/* Fichero redux/index.js */
import { listado } from "./reducers";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { session } from "./reducers/session";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/index.js";

// Crearemos un saga
const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  session,
  listado,
});

// STORE - El estado global de la aplicación.

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Ejecutamos el hilo de ejecución del middleware,
// sólo funcionará una vez ejecutado el método applyMiddleware
// sagaMiddleware.run(rootSaga);

export default store;
