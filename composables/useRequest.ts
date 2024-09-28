const request = (url:string,opts={})=>{
    const config = useRuntimeConfig()
    // const appConfig = useAppConfig()
   
    // console.log(url)
    return useFetch(()=>{
        const query = opts.queryObj || {}
        url+=formatQueryString(query)
        return url
    },{
        onRequest({options}){
            // console.log(appConfig)
            options.baseURL = config.public.apiBaseUrl
            // localStorage.getItem('token')
            options.headers = {
                ...(opts.headers||{})
            }
            options.headers.appId = 'bd9d01ecc75dbbaaefce'
        },
        onResponse({response}){
            return response._data
        },
        lazy:true,
        ...opts
    })
}



export const getApi = (url:string,options={})=>{
    options.method = 'GET'
    return request(url,options)
}

export const postApi = (url:string,options={})=>{
    options.method = 'POST'
    return request(url,options)
}