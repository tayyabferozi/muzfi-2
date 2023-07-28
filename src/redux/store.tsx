import { configureStore } from "@reduxjs/toolkit";
import authPopupReducer from "./features/auth/authPopupSlice";
import authTypeReducer from './features/auth/authTypeSlice';
import authLoginReducer from './features/auth/authLoginSlice';

export const store = configureStore({
  reducer: {
    authPopup: authPopupReducer,
    authType: authTypeReducer,
    authLogin: authLoginReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
