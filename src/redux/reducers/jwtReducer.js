// jwtReducer.js

// Defina o estado inicial para o JWT (pode ser null se nenhum JWT estiver presente inicialmente)
const initialState = {
    jwt: null,
  };
  
  // Defina o Reducer para manipular a ação relacionada ao JWT
  const jwtReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_JWT':
        return { ...state, jwt: action.payload };
      case 'CLEAR_JWT':
        return { ...state, jwt: null };
      default:
        return state;
    }
  };
  
  export default jwtReducer;
  