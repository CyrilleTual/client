// ici on est dans le store Redux

import { configureStore } from "@reduxjs/toolkit";
//import categoryReducer from './slices/category';
import { setupListeners } from "@reduxjs/toolkit/query"; // pour le middleware
import { serverApi } from "./serverApi";



export const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: serverApi.reducer,
    //category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
});
 

setupListeners(store.dispatch);