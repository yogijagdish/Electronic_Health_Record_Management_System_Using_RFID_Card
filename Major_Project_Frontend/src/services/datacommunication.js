// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const dataCommunicationApi = createApi({
  reducerPath: 'dataCommunicationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
  endpoints: (builder) => ({
    // login doctor api
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
    //  login admin
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
    //  login patient
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
    // registration of user
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

    //  fetch the data from User model and displays the data
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
    // user data
    // userDataAPI: builder.query({
    //   query: (access_token) => {
    //     return {
    //       url: 'userprofile/user-data/',
    //       method: 'GET',
    //       headers: {
    //         'content-type': 'application/json',
    //         'authorization': `Bearer ${access_token}`
    //       }
    //     }
    //   }
    // }),
    // patient api
    // fetching the data from user model to display in profile
    // getiing data
    // posting data
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
    updatePatientAPI: builder.mutation({
      query: ( {userInfo, access_token} ) => {
        return {
          url: 'patientprofile/patient-update/',
          method: 'POST',
          body: userInfo,
          headers: {
            'authorization': `Bearer ${access_token}`

          }
        }
      }
    }),

    // update the patient 

    updatePatientStatusAPI: builder.mutation({
      query: ({data,id}) => {
        return {
          url: `patientprofile/patient-status/${id}`,
          method: 'PUT',
          body: data,
          headers: {
            'content-type': 'application/json'
          }
        }
      }
    }),

    // create patient status

    createStatusAPI: builder.mutation({
      query: (user) => {
        return {
          url: 'patientprofile/create-status/',
          method: 'POST',
          body: user,
          headers: {
            'content-type': 'application/json'
          }
        }
      }
    }),

    upcomingPatientAPI: builder.query({
      query: (access_token) => {
        return {
          url: 'doctorprofile/upcoming-patient/',
          method:'GET',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${access_token}`
          }
        }
      }
    }),
    treatedPatientAPI: builder.query({
      query: (access_token) =>  {
        return{
          url: 'doctorprofile/treated-patient/',
          method:'GET',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${access_token}`
          }
        }

      }
    }),


    addReportAPI: builder.mutation({
      query: (data) => {
        return {
          url: 'patientprofile/add-report/',
          method: 'POST',
          body: data,
        }
      }
    }),

    displayReportAPI: builder.query({
      query: (access_token) => {
        return {
          url: 'patientprofile/show-report/',
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${access_token}`
          }
        }
      }
    }),

    updateStatusAPI: builder.mutation({
      query: (data) => {
        return {
          url: 'patientprofile/update-status/',
          method: 'PUT',
          body: data,
          headers: {
            'content-type': 'application/json'
          }
        }
      }
    }),

    // registration of user api
    // imageUploadAPI: builder.mutation({
    //   query: (user) => {
    //     return {
    //       url: 'doctorprofile/upload-image/',
    //       method: 'POST',
    //       body: user,
    //       headers: {
    //         'content-type': 'image/png'
    //       }
    //     }
    //   }
    // }),
    // //get the user id
    // getUserIdAPI: builder.mutation({
    //   query: (user) => {
    //     return {
    //       url: 'userprofile/user-data/',
    //       method: 'POST',
    //       body: user,
    //       headers: {
    //         'content-type': 'application/json'
    //       }
    //     }
    //   }
    // }),
    // another api
    // storeInfoUserAPI: builder.mutation({
    //   query: (user) => {
    //     return {
    //       url: 'userprofile/save-user/',
    //       method: 'POST',
    //       body: user,
    //       headers: {
    //         'content-type': 'application/json'
    //       }
    //     }
    //   }
    // }),

  })
  
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDoctorLoginAPIMutation, 
              usePatientLoginAPIMutation,
              useReceptionLoginAPIMutation,
              useUserRegistrationAPIMutation, 
              useUserProfileAPIQuery, 
              usePatientDataAPIQuery,
              useUpdatePatientAPIMutation, 
              useUpdatePatientStatusAPIMutation,
              useCreateStatusAPIMutation,
              useUpcomingPatientAPIQuery,
              useAddReportAPIMutation,
              useDisplayReportAPIQuery,
           useUpdateStatusAPIMutation,
          useTreatedPatientAPIQuery} = dataCommunicationApi