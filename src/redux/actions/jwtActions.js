// jwtActions.js

// Ação para definir o JWT
export const setJwt = (jwt) => {
    return {
      type: 'SET_JWT',
      payload: jwt,
    };
  };
  
  // Ação para limpar o JWT (quando o usuário faz logout)
  export const clearJwt = () => {
    return {
      type: 'CLEAR_JWT',
    };
  };
  