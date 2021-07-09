import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD8391E8H2DvGfYjvoQQ0VOvSu9fH3VN8A",
  authDomain: "e-commercr-3.firebaseapp.com",
  projectId: "e-commercr-3",
  storageBucket: "e-commercr-3.appspot.com",
  messagingSenderId: "222222678018",
  appId: "1:222222678018:web:3cd6a563aa6d93b93ecf1b",
  measurementId: "G-12YBWS73QC",
};

firebase.initializeApp(config);

// function that will take user UID from the user object and store it
// in the data base.

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // check if we are getting valid object or user.
  if (!userAuth) return;

  // if it exist. then query in the firestore to check if it exists.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // getting snapchot or reference.
  const snapShot = userRef.get();
  console.log("-----snap Shot ----", snapShot);

  // if there's not a snapshot or document , then we create one
  if (!snapShot.exists) {
    // data we want to store or create.
    const { displayName, email } = userAuth;
    // to know when we created this data.
    const createdAt = new Date();
    try {
      // .set() --> using it for the creation of data.
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
// export firestore.
export const firestore = firebase.firestore();

// set up authentication.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// using pop up to sign in.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
