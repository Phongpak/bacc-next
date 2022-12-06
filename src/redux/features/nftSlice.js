import { createSlice } from "@reduxjs/toolkit";
import nftData from "../../data/nftData";

export const nftSlice = createSlice({
  name: 'nft',
  initialState: {
    nfts: nftData,
    specificItem: nftData[0],
  },
  reducers: {
    specificNft: (state, action) => {
      state.specificItem = state.nfts.find(product => product.id === action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { specificNft } = nftSlice.actions;

export default nftSlice.reducer;