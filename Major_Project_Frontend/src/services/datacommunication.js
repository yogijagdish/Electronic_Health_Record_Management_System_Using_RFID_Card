// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const dataCommunicationApi = createApi({
  reducerPath: 'dataCommunicationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
  endpoints: (builder) => ({
    // login api
    doctorLoginAPI: builder.mutation({
      query: (user) => {
        return {
          url: 'auth/login-doctor/',
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
          url: 'auth/login-reception/',
          method: 'POST',
          body: user,
          headers: {
            'content-type': 'application/json'
          }
        }
      }
    }),
    // patient api
    patientLoginAPI: builder.mutation({
      query: (user) => {
        return {
          url: 'auth/login-patient/',
          method: 'POST',
          body: user,
          headers: {
            'content-type': 'application/json'
          }
        }
      }
    }),
    // fetching data
    userProfileAPI: builder.query({
      query: (access_token) => {
        return {
          url: 'auth/profile/',
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${access_token}`
          }
        }
      }
    }),
    // getiing data
    patientDataAPI: builder.query({
      query: (access_token) => {
        return {
          url: 'patientprofile/get-data/',
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${access_token}`
          }
        }

      }
    }),
    // registration of user api
    userRegistrationAPI: builder.mutation({
      query: (user) => {
        return {
          url: 'auth/register/',
          method: 'POST',
          body: user,
          headers: {
            'content-type': 'application/json'
          }
        }
      }
    }),
    imageUploadAPI: builder.mutation({
      query: (user) => {
        return {
          url: 'doctorprofile/upload-image/',
          method: 'POST',
          body: user,
          headers: {
            'content-type': 'image/png'
          }
        }
      }
    }),
    // another api
  })
  
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDoctorLoginAPIMutation, useReceptionLoginAPIMutation,usePatientLoginAPIMutation, useUserProfileAPIQuery,useUserRegistrationAPIMutation, useImageUploadAPIMutation, usePatientDataAPIQuery } = dataCommunicationApi