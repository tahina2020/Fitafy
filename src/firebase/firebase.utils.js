import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDyw8_Yvw06JMxbgHvpcpS2UHpchE7JcNI",
    authDomain: "ecommerce-db-16c0e.firebaseapp.com",
    projectId: "ecommerce-db-16c0e",
    storageBucket: "ecommerce-db-16c0e.appspot.com",
    messagingSenderId: "741622928625",
    appId: "1:741622928625:web:330929d2f9229924c80550",
    measurementId: "G-KLPW49YQSS"
  } 

  export const createUserProfileDocument = async(userAuth, additionalData)=>{
      if(!userAuth) return;

      const useRef = firestore.doc(`user/${userAuth.uid}`);
      const snapShot = await useRef.get();

      if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

          try{
            await useRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })

          }catch(error){
            console.log("error creating user",error.message);
          }
      }
      return useRef;

  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;