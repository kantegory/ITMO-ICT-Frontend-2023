import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    tagTypes: ['Project'],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080/"}),
    endpoints: build => ({
        getProjects: build.query({
            query: (userId) => ({
                url:`projects?userId=${userId}`,
                method: "GET"
            }),
            providesTags: ["Project"]
        }),
        addProject: build.mutation({
            query: (project) => ({
                url: 'projects',
                method: 'POST',
                body: project,
            }),
            invalidatesTags: ["Project"]
        }),
        getOneProject: build.query({
            query: (projectName) => ({
                url: `projects?name=${projectName}`,
                method : "GET"
            })
        })
    })
})

export const {useGetProjectsQuery, useAddProjectMutation, useGetOneProjectQuery} = projectsApi