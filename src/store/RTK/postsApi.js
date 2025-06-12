import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.PUBLIC_SERVER}/`, prepareHeaders: (headers) => {
            headers.set('X-Requested-With', 'XMLHttpRequest');
            return headers;
        },
    }),
    endpoints: (build) => ({
        getAllArchives: build.query({
            query: () => `volumes`
        }),
        getOneArchive: build.query({
            query: (id) => `volume/${id}`
        }),
        getIssuesOfVolume: build.query({
            query: (volume) => `issues/${volume}`
        }),
        getAllIssues: build.query({
            query: (volume) => `get-all-issues`
        }),
        getOneIsse: build.query({
            query: () => `volumes`
        }),
        getAllPosts: build.query({
            query: () => `posts`
        }),
        getOnePost: build.query({
            query: (id) => `post/${id}`
        }),
        getPostsWithParams: build.query({
            query: ({volume,issue}) => `postsofissue?volume=${volume}&issue=${issue}`
        })
    })
})

export const {
    useGetAllArchivesQuery,
    useGetOneArchiveQuery,
    useGetAllPostsQuery,
    useGetOnePostQuery,
    useGetIssuesOfVolumeQuery,
    useGetPostsWithParamsQuery,
    useGetAllIssuesQuery
} = postsApi;