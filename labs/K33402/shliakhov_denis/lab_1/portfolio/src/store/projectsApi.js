import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    tagTypes: ['Project'],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080/"}),
    endpoints: build => ({
        getProjects: build.query({
            query: (userId) => ({
                url: `projects?userId=${userId}`,
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
                method: "GET"
            })
        }),
        getUsers: build.query({
            query: () => ({
                url: 'users',
                method: "GET"
            })
        }),
        editProject: build.mutation({
            query: (project) => ({
                url: `projects/${project[1]}`,
                method: "PUT",
                body: project[0]
            }),
            invalidatesTags: ["Project"]
        }),
        deleteProject: build.mutation({
            query: (projectId) => ({
                url: `projects/${projectId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Project"]
        })
    })
})

export const {
    useGetProjectsQuery,
    useAddProjectMutation,
    useGetOneProjectQuery,
    useGetUsersQuery,
    useEditProjectMutation,
    useDeleteProjectMutation
} = projectsApi