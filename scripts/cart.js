export const cart = [
  {
    productId: "74774vdjd-qmiw978",
    quantity: 2,
  },
  {
    productId:'94774odjd-qqiw908',
    quantity:1
  }
];

export function addToCart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`,
  ).value;
  const quantity = Number(quantitySelector);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
}
