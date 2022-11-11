import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/Products/products.slice";

// TODO: Create a Redux Store
export const store = configureStore({
  reducer: {
    // TODO: 引用 slice裡的reducer
    products: productsReducer, // products
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
