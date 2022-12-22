import { configureStore } from '@reduxjs/toolkit';
import productSlice from './features/productSlice';
import creatorSlice from './features/creatorSlice';
import nftSlice from './features/nftSlice';

// import AuthProvider from '../hooks/useFirebase';

export const store = configureStore({
  reducer: {
    products: productSlice,
    creators: creatorSlice,
    nfts: nftSlice,
  },
})