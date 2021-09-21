import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3a25385e7dmsh17fb6be0355cf76p14c872jsn80e4297d5f38'

}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url)=> ({url, headers: cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const 
{
    useGetCryptosQuery,

}
 = cryptoApi;