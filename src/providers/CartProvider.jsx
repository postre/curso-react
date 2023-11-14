import { useEffect, useReducer, useState } from "react";
import { CartContext } from "../context";

const initialState = {
  items: [],
  subtotal: 0,
  taxes: 0,
  taxesPercentage: 21,
  shippingCost: 1500,
  total: 0,
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    return serializedState ? JSON.parse(serializedState) : initialState;
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return initialState;
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

const calculateTaxes = (subtotal, taxesPercentage) => {
  return (subtotal * taxesPercentage) / 100;
};

export const CartProvider = ({ children }) => {
  let newState = {};
  const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "INITIALIZE_CART":
        return action.payload;
      case "[CART] addToCart":
        const newItem = action.payload;
        const existingItemIndex = state.items.findIndex((item) => item.id === newItem.id);

        if (existingItemIndex !== -1) {
          // Si el artículo ya está en el carrito, actualiza la cantidad
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity = newItem.quantity;

          newState = {
            ...state,
            items: updatedItems,
            subtotal: state.subtotal + newItem.price * newItem.quantity,
            taxes: calculateTaxes(state.subtotal + newItem.price * newItem.quantity, state.taxesPercentage),
            total:
              state.total +
              newItem.price * newItem.quantity +
              calculateTaxes(state.subtotal + newItem.price * newItem.quantity, state.taxesPercentage) +
              state.shippingCost,
          };
          saveStateToLocalStorage(newState);
          return newState;
        } else {
          // Si el artículo no está en el carrito, agrégalo
          newState = {
            ...state,
            items: [...state.items, newItem],
            subtotal: state.subtotal + newItem.price * newItem.quantity,
            taxes: calculateTaxes(state.subtotal + newItem.price * newItem.quantity, state.taxesPercentage),
            total:
              state.total +
              newItem.price * newItem.quantity +
              calculateTaxes(state.subtotal + newItem.price * newItem.quantity, state.taxesPercentage) +
              state.shippingCost,
          };
          saveStateToLocalStorage(newState);
          return newState;
        }

      case "[CART] deleteFromCart":
        const removedItem = action.payload;
        const updatedItems = state.items.filter((item) => item.id !== removedItem.id);

        newState = {
          ...state,
          items: updatedItems,
          subtotal: updatedItems.reduce((total, item) => total + item.price * item.quantity, 0),
          taxes: calculateTaxes(
            updatedItems.reduce((total, item) => total + item.price * item.quantity, 0),
            state.taxesPercentage
          ),
          total:
            updatedItems.reduce((total, item) => total + item.price * item.quantity, 0) +
            calculateTaxes(
              updatedItems.reduce((total, item) => total + item.price * item.quantity, 0),
              state.taxesPercentage
            ) +
            state.shippingCost,
        };
        saveStateToLocalStorage(newState);
        return newState;
      case "[CART] addsCartItem":
        const increasedItem = action.payload;
        const updatedItemsIncrease = state.items.map((item) =>
          item.id === increasedItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );

        newState = {
          ...state,
          items: updatedItemsIncrease,
          subtotal: updatedItemsIncrease.reduce((total, item) => total + item.price * item.quantity, 0),
          taxes: calculateTaxes(
            updatedItemsIncrease.reduce((total, item) => total + item.price * item.quantity, 0),
            state.taxesPercentage
          ),
          total:
            updatedItemsIncrease.reduce((total, item) => total + item.price * item.quantity, 0) +
            calculateTaxes(
              updatedItemsIncrease.reduce((total, item) => total + item.price * item.quantity, 0),
              state.taxesPercentage
            ) +
            state.shippingCost,
        };
        saveStateToLocalStorage(newState);
        return newState;
      case "[CART] lessCartItem":
        const decreasedItem = action.payload;
        const updatedItemsDecrease = state.items.map((item) =>
          item.id === decreasedItem.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );

        newState = {
          ...state,
          items: updatedItemsDecrease,
          subtotal: updatedItemsDecrease.reduce((total, item) => total + item.price * item.quantity, 0),
          taxes: calculateTaxes(
            updatedItemsDecrease.reduce((total, item) => total + item.price * item.quantity, 0),
            state.taxesPercentage
          ),
          total:
            updatedItemsDecrease.reduce((total, item) => total + item.price * item.quantity, 0) +
            calculateTaxes(
              updatedItemsDecrease.reduce((total, item) => total + item.price * item.quantity, 0),
              state.taxesPercentage
            ) +
            state.shippingCost,
        };
        saveStateToLocalStorage(newState);
        return newState;
      default:
        saveStateToLocalStorage(newState);
        return newState;
    }
  };

  const addToCart = (productCart, cant = 1) => {
    productCart.quantity = cant;
    const action = {
      type: "[CART] addToCart",
      payload: productCart,
    };
    dispatch(action);
  };

  const deleteFromCart = (product) => {
    const action = {
      type: "[CART] deleteFromCart",
      payload: product,
    };
    dispatch(action);
  };

  const incrementItem = (product) => {
    const action = {
      type: "[CART] addsCartItem",
      payload: product,
    };
    dispatch(action);
  };
  const decrementItem = (product) => {
    const action = {
      type: "[CART] lessCartItem",
      payload: product,
    };
    dispatch(action);
  };

  const isInCart = (id) => { 
     return cart.items.find((item) => item.id===id) ;
  }

  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedState = loadStateFromLocalStorage();
    dispatch({ type: "INITIALIZE_CART", payload: savedState });
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, incrementItem, decrementItem, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
