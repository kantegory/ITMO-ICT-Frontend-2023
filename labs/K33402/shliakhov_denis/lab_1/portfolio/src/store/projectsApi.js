import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
    reducerPath: 'projectsApi',
    tagTypes: ['Projects'],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8080/"}),
    endpoints: build => ({
        getProjects: build.query({
            query: (userId) => ({
                url:`projects?userId=${userId}`,
                method: "GET"
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Projects', id })),
                        { type: 'Projects', id: 'LIST' },
                    ]
                    : [{ type: 'Projects', id: 'LIST' }],
        }),
        addProject: build.mutation({
            query: (project) => ({
                url: 'projects',
                method: 'POST',
                body: project,
            }),
            invalidateTags: [{type: "Projects", id : "LIST"}]
        })
    })
})

export const {useGetProjectsQuery, useAddProjectMutation} = projectsApi