/* Fichero redux/actions/index.js */
	
  export const ACTIONS_LISTADO = {
    GUARDAR: "GUARDAR_LISTADO",
    CARGAR: "CARGAR_LISTADO"
  }

  
  export const guardarListado = (msg) => {
    return {
      type: ACTIONS_LISTADO.GUARDAR,
      payload: msg
    }
  }

  export const cargarListado = () => {
    return {
        type: ACTIONS_LISTADO.CARGAR
    }
}
 