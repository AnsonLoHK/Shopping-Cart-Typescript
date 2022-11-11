import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

// TODO: Define a type for the slice state
export interface Product {
  title: string;
  price: number;
  id: string;
}

// TODO:  Define the initial state using that type
const initialState: Product[] = [
  {
    title: "purple",
    price: 50,
    id: "eft",
  },
  {
    title: "hunt purple",
    price: 50,
    id: "hunt",
  },
  {
    title: "hll purple",
    price: 50,
    id: "hll",
  },
];

export const productSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addProduct: (state, action: PayloadAction<number>) => {
      return [...state, action.payload];
    },
  },
});

export const { addProduct } = productSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default productSlice.reducer;
