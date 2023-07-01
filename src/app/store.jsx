import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoApi";
import { cryptoNewsApi } from "../services/CryptoNewsApi";
import { setupListeners } from "@reduxjs/toolkit/query/react";

const store  = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApi.middleware)
      .concat(cryptoNewsApi.middleware),
});

setupListeners(store.dispatch);

export default store;