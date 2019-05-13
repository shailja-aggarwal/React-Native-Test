const defaultState = {
  username:'',
  password:'',
  defaultCheck:{
    "username":"prashant@gmail.com",
    "password":"prashant123"
  },
  isCredentialInvaid:false
}

const reducer = (state=defaultState,action) => {

  switch (action.type) {
    case 'STORE_USER_ID':
      return{
        ...state,
        username:action.payload
      }
      break;
    case 'STORE_USER_PASSWORD':
      return{
        ...state,
        password:action.payload
      }
    case 'INVALID_CREDENTIALS':
      return{
        ...state,
        isCredentialInvaid:action.payload
      }
  }
    return state
}

export default reducer;
