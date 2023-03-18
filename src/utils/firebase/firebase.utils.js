import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore'

const firebaseConfig = { //this config allow us to have CRUD functionality on firebase database 
    apiKey: "AIzaSyCcaUua8UQLRqkbbmoLk0farTTaCX76kX0",
    authDomain: "clothing-db-3fa6a.firebaseapp.com",
    projectId: "clothing-db-3fa6a",
    storageBucket: "clothing-db-3fa6a.appspot.com",
    messagingSenderId: "504611705721",
    appId: "1:504611705721:web:38ade8611dd42faec3d5a8"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();
 googleprovider.setCustomParameters({
    prompt:"select_account"
 });

 export const auth = getAuth();
 export const signInwithGooglePopup = ()=>signInWithPopup(auth,googleprovider);
 export const signInwithGoogleRedirect = ()=> signInWithRedirect(auth,googleprovider);


export const db = getFirestore();

export const addCollectionAndDoc = async (collectionKey,objectToAdd)=>{
      const collectionRef = collection(db,collectionKey);
     const batch = writeBatch(db);

     objectToAdd.forEach((object)=>{
      const docRef = doc(collectionRef,object.title.toLowerCase())
      batch.set(docRef,object)
     })

     await batch.commit();
     console.log('done');
}

export const getCategoriesAndDoc = async ()=>{
   const collectionRef = collection(db,'categories')
   const q = query(collectionRef);

   const querySnapShot = await getDocs(q);
   const categorymap = querySnapShot.docs.reduce((acc, docSnapShot) => {
      const {title,items} = docSnapShot.data();
      acc[title.toLowerCase()]= items;
      return acc;
   },{});
 return categorymap;
}


export const createUserDocFromAuth = async(userAuth, additionalvalue={})=>{
   
   const userDocRef = doc(db,'users',userAuth.uid)
  

   const userSnapshot = await getDoc(userDocRef);
   
   
   if(!userSnapshot.exists()){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
await setDoc(userDocRef,{
    displayName,
    email,
    createdAt,
    ...additionalvalue
});
      }catch(error){
       console.log('error creating the user',error.message)
      }

   }





return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
 if(!email || !password) return;

 return await createUserWithEmailAndPassword(auth,email,password);
};

export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
   if(!email || !password) return;
  
   return await signInWithEmailAndPassword(auth,email,password);
  };

 export const signOutUser = async ()=> await signOut(auth) // auth is keeoing track which users are signed in Right now

 export const onAuthStateChangedListener = (callback)=>onAuthStateChanged(auth,callback);