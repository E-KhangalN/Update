import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      console.log(errorCode, errorMessage);
    });
};
