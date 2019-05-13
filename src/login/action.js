

export const storeUserName=(data)=>{
  return{
    type:'STORE_USER_ID',
    payload:data
  }
}

export const storeUserPassword=(data)=>{
  return{
    type:'STORE_USER_PASSWORD',
    payload:data
  }
}

export const checkValidUser=(cb)=>{
  return(dispatch,getState)=>{
    debugger;
    let username=(getState().login.username).toLowerCase()
    let password=(getState().login.password).toLowerCase()
    let defaultCheck=getState().login.defaultCheck;

    if(defaultCheck.username==username && defaultCheck.password==password){
      cb()
    }
    else{
      dispatch(setInvalidCredentials(true))
    }

  }
}

export const setInvalidCredentials=(data)=>{
  return{
    type:'INVALID_CREDENTIALS',
    payload:data
  }
}
