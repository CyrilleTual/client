import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../data/const.js";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Tea", "Category"],
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
      providesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),

    createTea: builder.mutation({
      query: (formData) => ({
        url: `/tea/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Tea"],
    }),

    getTeas: builder.query({
      query: () => `/tea`,
      transformResponse: (res) => res.result,
      providesTags: ["Tea"],
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
      invalidatesTags: ["Tea"],
    }),

    setFavorite: builder.mutation({
      query: ({ ...rest }) => ({
        url: `/tea/favorite`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Tea"],
    }),

    deleteTea: builder.mutation({
      query: (id) => ({
        url: `/tea/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tea"],
    }),

    getPackagings: builder.query({
      query: () => `/pack`,
      transformResponse: (res) => res.result,
      providesTags: ["Pack"],
    }),

    getTeaPack: builder.query({
      query: () => `/teaPackaging`,
      transformResponse: (res) => res.result,
      providesTags: ["TeaPack"],
    }),

    createTeaPack: builder.mutation({
      query: ({ ...rest }) => ({
        url: `/teaPackaging/add`,
        method: "POST",
        body: rest,
      }),
      invalidatesTags: ["TeaPack"],
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
  useGetPackagingsQuery,
  useCreateTeaPackMutation,
  useGetTeaPackQuery,

} = serverApi;
