import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from "../../data/const.js";

let urlReq = `${BASE_URL}/category`;
let datas = null;
let  initialState = {
  categories: [],
}; 

async function fetchData() {
    datas = await ((await fetch(urlReq)).json());
    //console.log ((datas.categories))
    initialState = { ...initialState, 
      categories: datas,
    }; 
    
}

fetchData()

console.log (initialState)

export const categorySlice = createSlice  ({
    name :"category",
    initialState :  initialState,
    reducers: {
        // ici on défini les reducers
    }  
});
    
export default categorySlice.reducer;