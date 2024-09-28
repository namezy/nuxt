const request = (url:string,opts={})=>{
    const config = useRuntimeConfig()
    const appConfig = useAppConfig()
    return useFetch(url,{
        onRequest({options}){
            console.log(appConfig)
            options.baseURL = config.public.apiBaseUrl
            localStorage.getItem('token')
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