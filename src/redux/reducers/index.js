/* Fichero redux/reducers/index.js */
	
import { ACTIONS_LISTADO } from '../actions';
	
const initialState = {
    listado: ""
  };

export const listado = (state = initialState.listado, action) => {
    switch(action.type) {
      case ACTIONS_LISTADO.GUARDAR:
        return action.payload;
      default:
        return state;
    }
  }
  
  export default listado;