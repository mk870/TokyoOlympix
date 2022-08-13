import jwt_decode from "jwt-decode";

export const getFirstTwoLetters = email =>{
  return (email.substring(0, 2)).toUpperCase()
}

export const getUserName = email =>{
  return email.split('@')[0]
}

export const getEmail = value =>{
  if(value){
    const decoded = jwt_decode(value);
    return(decoded.sub);
  }
  return null
}