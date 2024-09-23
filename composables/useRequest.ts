const request = (url:string,opts={})=>{
    return useFetch(url,{
        onRequest({options}){
            options.baseURL = 'http://demonuxtapi.dishait.cn'
            options.headers = {
                ...(options.headers||{}),
                ...(opts.headers||{})
            }
            options.headers.appId = 'bd9d01ecc75dbbaaefce'
        },
        onResponse({response}){
            return response._data
        },
        ...opts
    })
}



export const getApi = (url:string,options={})=>{
    options.method = 'GET'
    return request(url,options)
}