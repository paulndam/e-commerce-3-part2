import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./userActionTypes";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../Firebase/fireBaseUtils";
import {
  googleSignInSuccess,
  googleSignInFail,
  emailSignInSuccess,
  emailSignInFail,
  signOutSuccess,
  signOutFail,
  signUpFail,
  signUpSuccess,
} from "./userAction";

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    console.log("---User Ref ---", userRef);
    const userSnapshot = yield userRef.get();
    console.log("---user Snap Shot ---", userSnapshot);
    //put will put things back in a regular redux flow.
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFail(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    console.log("---User ---", user);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(googleSignInFail(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    console.log("----Sign In User ---", user);
    const userRef = yield call(createUserProfileDocument, user);
    console.log("---User Ref ---", userRef);
    const userSnapshot = yield userRef.get();
    console.log("---user Snap Shot ---", userSnapshot);
    //put will put things back in a regular redux flow.
    yield put(
      emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(emailSignInFail(error));
  }
}

// check if user exist or not.

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    console.log("----User Auth----", userAuth);

    if (!userAuth) return;

    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(googleSignInFail(error));
    yield put(emailSignInFail(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    console.log("---User Sign Up Saga ---", user);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFail(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapShotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

// instantiating and initializing all our sagas.

export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserAuthenticated),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
