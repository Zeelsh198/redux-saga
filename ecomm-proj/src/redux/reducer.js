import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      const remainingData = data.filter((item) => item.id !== action.data);
      console.log("remainings" , remainingData);
      return [...remainingData];
    case EMPTY_CART:
      data = [];
      return [...data];

    default:
      return data;
  }
};
