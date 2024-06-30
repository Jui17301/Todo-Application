import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { URLSearchParams } from "url";
const params = new URLSearchParams(window.location.search);

export const baseApi = createApi({
  reducerPath:'baseApi',
  baseQuery:fetchBaseQuery({
    baseUrl:`mongodb://localhost:27017`
  }),
  tagTypes:['todo'],
  endpoints:(builder)=>({
    getTodos:builder.query({
      query:(priority)=>{
        // const params = new URLSearchParams();
        if(priority){
          params.append("priority",priority)
        }
        return {
        url:`/tasks`,
        method:'GET',
        params:params
      }
    },
      providesTags:['todo']
    }),
    addTodo:builder.mutation({
      query:(data)=>{
        return {
          url:"/task",
          method:'POST',
          body:data
        }
      },
      invalidatesTags:['todo']

    }),
    updateTodo:builder.mutation({
      query:(options)=>{
        return {
          url:`/task/${options.id}`,
          method:'PUT',
          body:options.data
        }
      },
      invalidatesTags:['todo']

    })
  })
})
export const {useGetTodosQuery,useAddTodoMutation,useUpdateTodoMutation}= baseApi;