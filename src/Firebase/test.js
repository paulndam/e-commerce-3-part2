import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

// query for collection of user.
//get collection of user,
//from collection get the doc with specific user
//then get collection item of that user and
// get the document

firestore
  .collection("users")
  .doc("n1ItWfYKjJi7ZtFcXINu")
  .collection("cartItems")
  .doc("USLZjDBEONpm8DY9qdc4");

//   same query as above

firestore.doc("/user/n1ItWfYKjJi7ZtFcXINu/cartItems/USLZjDBEONpm8DY9qdc4");
// to get collection item
firestore.collection("/user/n1ItWfYKjJi7ZtFcXINu/cartItems");
