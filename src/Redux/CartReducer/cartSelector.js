import { createSelector } from "reselect";

// two types of selector.
//1. Input selector: doesn't use create selector
//2.Output selector: use create selector and input selector to build it self.

// input selector function .
// it get the whole or entire states and return the slice of that state
const selectCart = (state) => state.cart;

//takes two args.
//1. collection of array or cart.
//2. a function that will return the val we want out of the selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQTY, cartItem) => accumalatedQTY + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQTY, cartItem) =>
      accumalatedQTY + cartItem.quantity * cartItem.price,
    0
  )
);
