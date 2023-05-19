import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../data/const.js";

let urlReq = `${BASE_URL}/category`;
let datas = null;
let initialState = {
  categories: [],
};

async function fetchData() {
  datas = await (await fetch(urlReq)).json();
  //console.log ((datas.categories))
  initialState = { ...initialState, categories: datas };
  return initialState;
}

const result =  fetchData();

console.log(result);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default categorySlice.reducer;
