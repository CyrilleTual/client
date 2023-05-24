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

    getOneTea: builder.query({
      query: (id) => `/tea/${id}`,
      transformResponse: (res) => res.result,
    }),

    updateTea: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/tea/modify/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),

    setFavorite: builder.mutation({
      query: ({...rest }) => ({
        url: `/tea/favorite`,
        method: "PUT",
        body: rest,
      }),
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
  useGetOneTeaQuery,
  useDeleteTeaMutation,
  useUpdateTeaMutation,
  useSetFavoriteMutation,
    
} = serverApi;
