export const addItemToCart = (cartItems, cartItemToAdd) => {
  const itemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  console.log("------Existing Cart item-------", itemExist);

  if (itemExist) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const itemExist = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (itemExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
