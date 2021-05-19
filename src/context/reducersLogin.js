export const ADD_FORM = 'ADD_FORM';

export const initialState = () =>(
    {
      email: "", 
      password: "", 
      formLogin: true
    }
)

export const reducerLogin = (state = initialState(), action) => {

  switch (action.type) {
    case ADD_FORM: return [...state, action.payload];
    default: return state;
  }
}
