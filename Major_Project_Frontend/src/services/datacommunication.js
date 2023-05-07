// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const dataCommunicationApi = createApi({
  reducerPath: 'dataCommunicationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/auth' }),
  endpoints: (builder) => ({
    // login api
    doctorLoginAPI: builder.mutation({
      query: (user) => {
        return {
          url: 'login-doctor/',
          method: 'POST',
          body: user,
          headers: {
            'content-type': 'application/json'
          }
        }

      }
    }),
    //  reception api
    receptionLoginAPI: builder.mutation({
      query: (user) => {
        return {
          url: 'login-reception',
          method: 'POST',
          body: user,
          headers: {
            'content-type': 'application/json'
          }
        }
      }
    }),
    // another api

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDoctorLoginAPIMutation, useReceptionLoginAPIMutation } = dataCommunicationApi