import firebase from 'firebase/app';
import "firebase/auth";
import {Auth} from './firebase';

  
export const register = async({email, password})=>{
  let result;
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password).then((data)=>{
        console.log("Success:",data);
        result = "User Created Successfully";
      }).catch((err)=>{
        console.log("Unsuccessful:",err);
        result = "User Already Exist";
      });
    // return resp.user;

      return result;

}
  
export const login = async({email, password})=>{
  let result;
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password).then((data)=>{
        console.log("Success:",data);
        result = "User Logged Successfully";
      }).catch((err)=>{
        console.log("Unsuccessful:",err);
        result = err.code;
      });;
    // return res.user;

    return result;
}