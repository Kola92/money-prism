import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': "bing-news-search1.p.rapidapi.com",
    'X-RapidAPI-Key': "d64c7aea7cmshf17b7aa3655dd78p1ce7c6jsncdcc9faedda5"
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const createRequest = url => ({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
  reducerPath: "crytpoNewsApi",
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => createRequest(`/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
})

export const {
  useGetCryptoNewsQuery,
} = cryptoNewsApi;