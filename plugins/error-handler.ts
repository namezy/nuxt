export default defineNuxtPlugin((nuxtApp)=>{
    nuxtApp.vueApp.config.errorHandler = (err,instance,info)=>{
        console.error('Error:',err)
        console.error('Component:',instance)
        console.error('Info :',info)
    }
})