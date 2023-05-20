import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../data/const.js";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({

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

    createCategory: builder.mutation({
      query: (formData) => ({
        url: `/category/add`,
        method: "POST",
        body:  formData ,
      }),
    }),


  }),
});

export const { 
    useGetCategoriesQuery,
    useDeleteCategoryMutation,
    useCreateCategoryMutation, 
} = serverApi;
