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
        })
    })
})

export const {useGetProjectsQuery, useAddProjectMutation} = projectsApi