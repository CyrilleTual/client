import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../data/const.js";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (formData) => ({
        url: `/category/add`,
        method: "POST",
        body: formData,
      }),
    }),

    getCategories: builder.query({
      query: () => `/category`,
      transformResponse: (res) => res.categories,
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
    }),

    createTea: builder.mutation({
      query: (formData) => ({
        url: `/tea/add`,
        method: "POST",
        body: formData,
      }),
    }),

    getTeas: builder.query({
      query: () => `/tea`,
      transformResponse: (res) => res.result,
    }),

    deleteTea: builder.mutation({
      query: (id) => ({
        url: `/tea/delete/${id}`,
        method: "DELETE",
      }),
    }),


  }),
});

export const { 
  useGetCategoriesQuery,
  useDeleteCategoryMutation,
  useCreateCategoryMutation, 
  useCreateTeaMutation,
  useGetTeasQuery,
  useDeleteTeaMutation,
    
} = serverApi;
